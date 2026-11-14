/**
 * Home Page Logic:
 * - Custom JS/jQuery Hero Carousel (no Bootstrap carousel JS plugin)
 * - Live Open-Meteo Public API Weather Telemetry
 * - Animated Scroll Counters
 * - Interactive 15-Second Destination Finder Quiz
 */
(function (window, $) {
  "use strict";

  const CITIES = {
    astana: { name: { en: "Astana", ru: "Астана", kz: "Астана" }, lat: 51.1694, lon: 71.4491, fallbackTemp: -4, fallbackWind: 18 },
    almaty: { name: { en: "Almaty", ru: "Алматы", kz: "Алматы" }, lat: 43.2220, lon: 76.8512, fallbackTemp: 7, fallbackWind: 9 },
    aktau: { name: { en: "Aktau", ru: "Актау", kz: "Ақтау" }, lat: 43.6500, lon: 51.1667, fallbackTemp: 11, fallbackWind: 21 }
  };

  function initCustomCarousel() {
    const $carousel = $("#nwHeroCarousel");
    if (!$carousel.length) return;

    const $slides = $carousel.find(".nw-carousel-slide");
    const $dots = $carousel.find(".nw-carousel-dot");
    let current = 0;
    let timer = null;

    function goToSlide(index) {
      current = (index + $slides.length) % $slides.length;
      $slides.removeClass("is-active").eq(current).addClass("is-active");
      $dots.removeClass("is-active").eq(current).addClass("is-active");
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(() => goToSlide(current + 1), 4500);
    }

    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    $carousel.find(".nw-carousel-prev").on("click", () => {
      goToSlide(current - 1);
      startAuto();
    });

    $carousel.find(".nw-carousel-next").on("click", () => {
      goToSlide(current + 1);
      startAuto();
    });

    $dots.on("click", function () {
      goToSlide(parseInt($(this).attr("data-slide"), 10));
      startAuto();
    });

    $carousel.on("mouseenter", stopAuto).on("mouseleave", startAuto);
    startAuto();
  }

  function decodeWeatherCode(code, lang) {
    const map = {
      clear: { en: "Clear Sky", ru: "Ясно", kz: "Ашық аспан" },
      cloudy: { en: "Partly Cloudy", ru: "Переменная облачность", kz: "Аздап бұлтты" },
      rain: { en: "Light Rain", ru: "Небольшой дождь", kz: "Жаңбыр" },
      snow: { en: "Light Snow", ru: "Снег", kz: "Қар" }
    };
    let key = "cloudy";
    if (code === 0 || code === 1) key = "clear";
    else if (code >= 71 && code <= 77) key = "snow";
    else if (code >= 51 && code <= 67) key = "rain";
    return map[key][lang] || map[key].en;
  }

  async function loadCityWeather(cityKey) {
    const city = CITIES[cityKey] || CITIES.astana;
    const lang = window.NomadWay.getLang();
    $("#weatherCityTitle").text(city.name[lang] || city.name.en);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3200);
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      const cw = data.current_weather;

      $("#weatherTemp").text(`${Math.round(cw.temperature)}°C`);
      $("#weatherWindVal").text(`${Math.round(cw.windspeed)} km/h`);
      $("#weatherCondition").text(decodeWeatherCode(cw.weathercode, lang));
      $("#weatherStatusBadge")
        .removeClass("bg-secondary")
        .addClass("bg-success")
        .text(window.NomadWay.t("weather_status_live"));
    } catch (e) {
      $("#weatherTemp").text(`${city.fallbackTemp}°C`);
      $("#weatherWindVal").text(`${city.fallbackWind} km/h`);
      $("#weatherCondition").text(decodeWeatherCode(2, lang));
      $("#weatherStatusBadge")
        .removeClass("bg-success")
        .addClass("bg-secondary")
        .text(window.NomadWay.t("weather_status_cached"));
    }
  }

  function initWeatherWidget() {
    let activeCity = "astana";
    loadCityWeather(activeCity);

    $(".weather-chip").on("click", function () {
      $(".weather-chip").removeClass("active");
      $(this).addClass("active");
      activeCity = $(this).attr("data-city");
      loadCityWeather(activeCity);
    });

    $(document).on("nomadway:langchange", function () {
      loadCityWeather(activeCity);
    });
  }

  function initAnimatedCounters() {
    const $counters = $(".nw-counter");
    if (!$counters.length) return;
    let started = false;

    function checkAndAnimate() {
      if (started) return;
      const bottom = $(window).scrollTop() + $(window).height();
      if (bottom >= $counters.first().offset().top) {
        started = true;
        $counters.each(function () {
          const $el = $(this);
          const target = parseFloat($el.attr("data-target"));
          const decimals = parseInt($el.attr("data-decimals") || "0", 10);
          $({ val: 0 }).animate(
            { val: target },
            {
              duration: 1400,
              easing: "swing",
              step: function () {
                $el.text(this.val.toFixed(decimals));
              },
              complete: function () {
                $el.text(target.toFixed(decimals));
              }
            }
          );
        });
      }
    }

    $(window).on("scroll", checkAndAnimate);
    checkAndAnimate();
  }

  async function initFeaturedDestinations(destinations) {
    const $grid = $("#homeFeaturedGrid");
    if (!$grid.length) return;

    function renderFeatured() {
      const lang = window.NomadWay.getLang();
      const topThree = [...destinations].sort((a, b) => b.rating - a.rating).slice(0, 3);
      $grid.empty();

      topThree.forEach(item => {
        $grid.append(`
          <div class="col-md-6 col-lg-4">
            <article class="nw-card nw-card-hover h-100 d-flex flex-column">
              <div class="dest-thumb">
                <img src="${item.image}" alt="${item.title[lang]}" loading="lazy">
                <span class="dest-cat-pill">${item.region[lang]}</span>
                <span class="dest-price-pill">$${item.priceUsd}</span>
              </div>
              <div class="p-3 p-md-4 flex-grow-1 d-flex flex-column">
                <div class="d-flex justify-content-between small text-muted mb-1">
                  <span><i class="fa-regular fa-clock me-1 text-accent"></i>${item.durationDays}d</span>
                  <span><i class="fa-solid fa-star text-warning me-1"></i>${item.rating.toFixed(1)}</span>
                </div>
                <h5 class="fw-bold mb-2">${item.title[lang]}</h5>
                <p class="small text-muted mb-3 flex-grow-1">${item.description[lang]}</p>
                <div class="d-flex gap-2 mt-auto">
                  <a href="destinations.html" class="btn btn-outline-accent btn-sm rounded-pill flex-grow-1 fw-semibold">
                    ${window.NomadWay.t("btn_details")}
                  </a>
                  <button type="button" class="btn btn-accent btn-sm rounded-pill px-3 fw-semibold home-add-planner" data-id="${item.id}">
                    <i class="fa-solid fa-plus me-1"></i>${window.NomadWay.t("btn_add_trip")}
                  </button>
                </div>
              </div>
            </article>
          </div>
        `);
      });
    }

    renderFeatured();
    $(document).on("click", ".home-add-planner", function () {
      const id = $(this).attr("data-id");
      const item = destinations.find(d => d.id === id);
      const lang = window.NomadWay.getLang();
      const res = window.NomadWay.addDestinationToItinerary(id);
      if (res.added) {
        window.NomadWay.showToast(`${item.title[lang]} → ${res.day.toUpperCase()}`, "success");
      } else {
        window.NomadWay.showToast(`${item.title[lang]} is already in your Trip Planner.`, "warning");
      }
    });
    $(document).on("nomadway:langchange", renderFeatured);
  }

  async function initHomeFinder(destinations) {
    const $btn = $("#quickMatchBtn");
    if (!$btn.length) return;

    function renderMatch() {
      const cat = $("#finderTerrain").val();
      const maxDays = parseInt($("#finderDays").val(), 10);
      const lang = window.NomadWay.getLang();

      const matches = destinations.filter(d => d.category === cat && d.durationDays <= maxDays);
      const pick = (matches.length ? matches : destinations.filter(d => d.category === cat))[0] || destinations[0];

      const html = `
        <div class="d-flex flex-column flex-md-row align-items-md-center gap-3 p-3 rounded-4 border mt-3" style="background: var(--bg-surface-alt);">
          <img src="${pick.image}" alt="${pick.title[lang]}" class="rounded-3" style="width:110px;height:80px;object-fit:cover;">
          <div class="flex-grow-1">
            <div class="small fw-bold text-accent text-uppercase">${pick.region[lang]} &bull; $${pick.priceUsd}</div>
            <h5 class="fw-bold mb-1">${pick.title[lang]}</h5>
            <p class="small text-muted mb-0">${pick.description[lang]}</p>
          </div>
          <a href="destinations.html" class="btn btn-accent btn-sm rounded-pill px-3 fw-semibold text-nowrap">
            ${window.NomadWay.t("btn_details")}
          </a>
        </div>
      `;
      $("#quickMatchResult").hide().html(html).fadeIn(250);
    }

    $btn.on("click", renderMatch);
    $(document).on("nomadway:langchange", function () {
      if ($("#quickMatchResult").children().length) renderMatch();
    });
  }

  $(document).ready(async function () {
    initCustomCarousel();
    initWeatherWidget();
    initAnimatedCounters();
    const destinations = await window.loadJsonResource("data/destinations.json", "destinations");
    initFeaturedDestinations(destinations);
    initHomeFinder(destinations);
  });
})(window, jQuery);
