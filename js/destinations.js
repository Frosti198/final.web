/**
 * Destinations Page Logic:
 * - Dynamic JSON loading (destinations.json)
 * - Live Search + Category Filter + Animated Dynamic Sorting
 * - Custom JS/jQuery Modal (no Bootstrap modal JS plugin)
 * - Add to Planner (localStorage sync)
 */
(function (window, $) {
  "use strict";

  let allDestinations = [];
  let activeCategory = "all";
  let lastFocusedTrigger = null;

  function renderCards() {
    const $grid = $("#destinationsGrid");
    if (!$grid.length) return;

    const lang = window.NomadWay.getLang();
    const query = ($("#destSearchInput").val() || "").trim().toLowerCase();
    const sortBy = $("#destSortSelect").val() || "recommended";

    let filtered = allDestinations.filter(item => {
      const catMatch = activeCategory === "all" || item.category === activeCategory;
      const haystack = [
        item.title[lang],
        item.region[lang],
        item.description[lang],
        ...(item.highlights[lang] || [])
      ].join(" ").toLowerCase();
      return catMatch && (!query || haystack.includes(query));
    });

    if (sortBy === "price-asc") filtered.sort((a, b) => a.priceUsd - b.priceUsd);
    else if (sortBy === "price-desc") filtered.sort((a, b) => b.priceUsd - a.priceUsd);
    else if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "duration") filtered.sort((a, b) => a.durationDays - b.durationDays);

    $grid.stop(true, true).fadeOut(130, function () {
      $grid.empty();

      if (!filtered.length) {
        $("#noDestFound").removeClass("d-none");
        $grid.show();
        return;
      }

      $("#noDestFound").addClass("d-none");
      filtered.forEach(item => {
        const $col = $(`
          <div class="col-md-6 col-lg-4">
            <article class="nw-card nw-card-hover h-100 d-flex flex-column">
              <div class="dest-thumb">
                <img src="${item.image}" alt="${item.title[lang]}" loading="lazy">
                <span class="dest-cat-pill">${item.region[lang]}</span>
                <span class="dest-price-pill">$${item.priceUsd}</span>
              </div>
              <div class="p-4 flex-grow-1 d-flex flex-column">
                <div class="d-flex justify-content-between align-items-center mb-2 small text-muted">
                  <span><i class="fa-regular fa-clock me-1 text-accent"></i>${item.durationDays}d &bull; ${item.difficulty[lang]}</span>
                  <span><i class="fa-solid fa-star text-warning me-1"></i>${item.rating.toFixed(1)}</span>
                </div>
                <h5 class="fw-bold mb-2">${item.title[lang]}</h5>
                <p class="small text-muted mb-3 flex-grow-1">${item.description[lang]}</p>
                <div class="d-flex gap-2 mt-auto">
                  <button type="button" class="btn btn-outline-accent btn-sm rounded-pill flex-grow-1 fw-semibold btn-open-custom-modal" data-id="${item.id}">
                    <i class="fa-solid fa-circle-info me-1"></i>${window.NomadWay.t("btn_details")}
                  </button>
                  <button type="button" class="btn btn-accent btn-sm rounded-pill px-3 fw-semibold btn-add-planner" data-id="${item.id}">
                    <i class="fa-solid fa-plus me-1"></i>${window.NomadWay.t("btn_add_trip")}
                  </button>
                </div>
              </div>
            </article>
          </div>
        `);
        $grid.append($col);
      });

      $grid.fadeIn(220);
    });
  }

  function openCustomModal(destId, triggerEl) {
    const item = allDestinations.find(d => d.id === destId);
    if (!item) return;

    lastFocusedTrigger = triggerEl || null;
    const lang = window.NomadWay.getLang();

    $("#customModalImg").attr({ src: item.image, alt: item.title[lang] });
    $("#customModalTitle").text(item.title[lang]);
    $("#customModalDesc").text(item.description[lang]);
    $("#customModalRegion").text(item.region[lang]);
    $("#customModalDifficulty").text(item.difficulty[lang]);
    $("#customModalDuration").text(`${item.durationDays} days`);
    $("#customModalPrice").text(`$${item.priceUsd}`);
    $("#customModalAddBtn").attr("data-id", item.id);

    const $list = $("#customModalHighlights").empty();
    (item.highlights[lang] || []).forEach(h => {
      $list.append(`<li class="mb-1"><i class="fa-solid fa-check text-accent me-2"></i>${h}</li>`);
    });

    $("#nwCustomModalBackdrop").css("display", "flex").hide().fadeIn(200);
    $("body").addClass("overflow-hidden");
    $("#customModalCloseBtn").trigger("focus");
  }

  function closeCustomModal() {
    $("#nwCustomModalBackdrop").fadeOut(180, function () {
      $(this).hide();
      $("body").removeClass("overflow-hidden");
      if (lastFocusedTrigger) $(lastFocusedTrigger).trigger("focus");
    });
  }

  async function initDestinationsPage() {
    if (!$("#destinationsGrid").length) return;
    allDestinations = await window.loadJsonResource("data/destinations.json", "destinations");
    renderCards();

    $(".dest-filter-btn").on("click", function () {
      $(".dest-filter-btn").removeClass("active");
      $(this).addClass("active");
      activeCategory = $(this).attr("data-category");
      renderCards();
    });

    $("#destSearchInput").on("input", renderCards);
    $("#destSortSelect").on("change", renderCards);

    $(document).on("click", ".btn-open-custom-modal", function () {
      openCustomModal($(this).attr("data-id"), this);
    });

    $(document).on("click", ".btn-add-planner, #customModalAddBtn", function () {
      const id = $(this).attr("data-id");
      const item = allDestinations.find(d => d.id === id);
      const lang = window.NomadWay.getLang();
      const res = window.NomadWay.addDestinationToItinerary(id);
      if (res.added) {
        window.NomadWay.showToast(`${item.title[lang]} → ${res.day.toUpperCase()}`, "success");
      } else {
        window.NomadWay.showToast(`${item.title[lang]} is already in your Trip Planner.`, "warning");
      }
    });

    $("#customModalCloseBtn, #customModalFooterClose").on("click", closeCustomModal);
    $("#nwCustomModalBackdrop").on("click", function (e) {
      if (e.target === this) closeCustomModal();
    });
    $(document).on("keydown", function (e) {
      if (e.key === "Escape" && $("#nwCustomModalBackdrop").is(":visible")) {
        closeCustomModal();
      }
    });

    $(document).on("nomadway:langchange", renderCards);
  }

  $(document).ready(initDestinationsPage);
})(window, jQuery);
