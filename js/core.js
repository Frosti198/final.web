/**
 * NomadWay Core Engine
 * Shared across all 5 pages: preloader, i18n (EN/RU/KZ), Dark/Light theme,
 * accent customizer, toast notifications, scroll animations, and itinerary state.
 */
(function (window, $) {
  "use strict";

  const STORAGE_KEYS = {
    lang: "nomadway_lang",
    theme: "nomadway_theme",
    accent: "nomadway_accent",
    itinerary: "nomadway_itinerary",
    budget: "nomadway_budget"
  };

  let translationsCache = null;

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEYS.lang);
    return ["en", "ru", "kz"].includes(saved) ? saved : "en";
  }

  function t(key, fallback) {
    const lang = getLang();
    if (translationsCache && translationsCache[lang] && translationsCache[lang][key]) {
      return translationsCache[lang][key];
    }
    if (window.NOMADWAY_DATA && window.NOMADWAY_DATA.translations) {
      const dict = window.NOMADWAY_DATA.translations[lang] || window.NOMADWAY_DATA.translations.en;
      if (dict && dict[key]) return dict[key];
    }
    return fallback || key;
  }

  function applyTranslations() {
    const lang = getLang();
    document.documentElement.setAttribute("lang", lang === "kz" ? "kk" : lang);

    $("[data-i18n]").each(function () {
      const key = $(this).attr("data-i18n");
      const val = t(key);
      if (val) $(this).text(val);
    });

    $("[data-i18n-placeholder]").each(function () {
      const key = $(this).attr("data-i18n-placeholder");
      const val = t(key);
      if (val) $(this).attr("placeholder", val);
    });

    $(".lang-switch-btn").removeClass("active").attr("aria-pressed", "false");
    $(`.lang-switch-btn[data-lang="${lang}"]`).addClass("active").attr("aria-pressed", "true");
  }

  async function setLang(lang) {
    if (!["en", "ru", "kz"].includes(lang)) return;
    localStorage.setItem(STORAGE_KEYS.lang, lang);
    if (!translationsCache) {
      translationsCache = await window.loadJsonResource("data/translations.json", "translations");
    }
    applyTranslations();
    $(document).trigger("nomadway:langchange", [lang]);
  }

  function applyTheme(theme) {
    const normalized = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", normalized);
    localStorage.setItem(STORAGE_KEYS.theme, normalized);

    const $icon = $("#themeToggleBtn i");
    if ($icon.length) {
      $icon.attr("class", normalized === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon");
    }
  }

  function applyAccent(accent) {
    const valid = ["indigo", "emerald", "amber"].includes(accent) ? accent : "indigo";
    document.documentElement.setAttribute("data-accent", valid);
    localStorage.setItem(STORAGE_KEYS.accent, valid);
    $(".accent-swatch").removeClass("active");
    $(`.accent-swatch[data-accent="${valid}"]`).addClass("active");
  }

  function getDefaultItinerary() {
    return {
      day1: ["astana"],
      day2: ["burabay"],
      day3: []
    };
  }

  function getItinerary() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.itinerary);
      if (!raw) return getDefaultItinerary();
      const parsed = JSON.parse(raw);
      return {
        day1: Array.isArray(parsed.day1) ? parsed.day1 : [],
        day2: Array.isArray(parsed.day2) ? parsed.day2 : [],
        day3: Array.isArray(parsed.day3) ? parsed.day3 : []
      };
    } catch (e) {
      return getDefaultItinerary();
    }
  }

  function saveItinerary(itinerary) {
    localStorage.setItem(STORAGE_KEYS.itinerary, JSON.stringify(itinerary));
    updatePlannerBadge();
  }

  function addDestinationToItinerary(destId) {
    const it = getItinerary();
    const allIds = [...it.day1, ...it.day2, ...it.day3];
    if (allIds.includes(destId)) {
      return { added: false, day: null };
    }
    let targetDay = "day1";
    if (it.day1.length > it.day2.length) targetDay = "day2";
    if (it.day2.length > it.day3.length && it.day1.length >= it.day2.length) targetDay = "day3";
    it[targetDay].push(destId);
    saveItinerary(it);
    return { added: true, day: targetDay };
  }

  function updatePlannerBadge() {
    const it = getItinerary();
    const total = it.day1.length + it.day2.length + it.day3.length;
    $(".planner-count-badge").text(total);
  }

  function showToast(message, type = "info") {
    let $stack = $("#nwToastStack");
    if (!$stack.length) {
      $stack = $('<div id="nwToastStack" class="nw-toast-stack" aria-live="polite" aria-atomic="true"></div>');
      $("body").append($stack);
    }

    const icons = {
      success: "fa-circle-check text-success",
      warning: "fa-triangle-exclamation text-warning",
      error: "fa-circle-xmark text-danger",
      info: "fa-circle-info text-accent"
    };

    const $toast = $(`
      <div class="nw-toast toast-${type}" role="status" style="display:none;">
        <i class="fa-solid ${icons[type] || icons.info} fs-5 mt-1"></i>
        <div class="flex-grow-1 small fw-medium">${$("<div>").text(message).html()}</div>
        <button type="button" class="btn-close btn-sm" aria-label="Close"></button>
      </div>
    `);

    $stack.append($toast);
    $toast.fadeIn(220);

    const timer = setTimeout(() => {
      $toast.fadeOut(250, () => $toast.remove());
    }, 3600);

    $toast.find(".btn-close").on("click", () => {
      clearTimeout(timer);
      $toast.fadeOut(200, () => $toast.remove());
    });
  }

  function initScrollEnhancements() {
    const $navbar = $(".navbar-nw");
    const $progress = $("#nwScrollProgress");
    const $backTop = $("#nwBackToTop");

    function onScroll() {
      const scrollTop = $(window).scrollTop();
      const docHeight = $(document).height() - $(window).height();
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;

      if ($progress.length) $progress.css("width", pct + "%");
      if (scrollTop > 36) {
        $navbar.addClass("scrolled");
      } else {
        $navbar.removeClass("scrolled");
      }

      if ($backTop.length) {
        if (scrollTop > 280) {
          $backTop.fadeIn(200).css("display", "inline-flex");
        } else {
          $backTop.fadeOut(200);
        }
      }

      const viewportBottom = scrollTop + $(window).height() - 30;
      $(".reveal-on-scroll").each(function () {
        const $el = $(this);
        if (!$el.hasClass("is-visible") && $el.offset().top < viewportBottom) {
          $el.addClass("is-visible");
        }
      });
    }

    $(window).on("scroll resize", onScroll);
    onScroll();

    $backTop.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 420);
    });
  }

  async function initCore() {
    applyTheme(localStorage.getItem(STORAGE_KEYS.theme) || "light");
    applyAccent(localStorage.getItem(STORAGE_KEYS.accent) || "indigo");

    translationsCache = await window.loadJsonResource("data/translations.json", "translations");
    applyTranslations();
    updatePlannerBadge();
    initScrollEnhancements();

    $(document).on("click", ".lang-switch-btn", function () {
      const lang = $(this).attr("data-lang");
      setLang(lang);
      const labels = { en: "Language: English", ru: "Язык: Русский", kz: "Тіл: Қазақша" };
      showToast(labels[lang] || "Language updated", "info");
    });

    $("#themeToggleBtn").on("click", function () {
      const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      const lang = getLang();
      const msg = {
        en: next === "dark" ? "Dark mode enabled" : "Light mode enabled",
        ru: next === "dark" ? "Тёмная тема включена" : "Светлая тема включена",
        kz: next === "dark" ? "Қараңғы режим қосылды" : "Жарық режим қосылды"
      };
      showToast(msg[lang], "info");
    });

    $(document).on("click", ".accent-swatch", function () {
      const accent = $(this).attr("data-accent");
      applyAccent(accent);
      showToast(`Accent theme: ${accent}`, "success");
    });

    const $preloader = $("#nwPreloader");
    if ($preloader.length) {
      setTimeout(() => $preloader.fadeOut(300), 180);
    }
  }

  window.NomadWay = {
    STORAGE_KEYS,
    getLang,
    setLang,
    t,
    applyTranslations,
    getItinerary,
    saveItinerary,
    addDestinationToItinerary,
    updatePlannerBadge,
    showToast
  };

  $(document).ready(initCore);
})(window, jQuery);
