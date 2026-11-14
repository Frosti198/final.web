/**
 * Trip Planner Logic:
 * - jQuery UI Drag & Drop (connectWith sortable across Pool + Day 1-3)
 * - Accessible quick-move buttons for touch/keyboard users
 * - Live Budget Tracker & Progress Bar
 * - Clipboard Copy API + Toast notifications
 */
(function (window, $) {
  "use strict";

  let destinationsMap = {};

  function getTargetBudget() {
    const raw = parseFloat(localStorage.getItem(window.NomadWay.STORAGE_KEYS.budget) || "650");
    return Number.isFinite(raw) && raw > 0 ? raw : 650;
  }

  function createPlannerCard(item) {
    const lang = window.NomadWay.getLang();
    return $(`
      <div class="planner-card" data-id="${item.id}">
        <div class="d-flex justify-content-between align-items-start gap-2 mb-1">
          <div class="fw-bold small">${item.title[lang]}</div>
          <span class="badge bg-primary bg-opacity-10 text-accent fw-bold">$${item.priceUsd}</span>
        </div>
        <div class="text-muted" style="font-size: 0.78rem;">
          <i class="fa-solid fa-location-dot me-1"></i>${item.region[lang]} &bull; ${item.durationDays}d
        </div>
        <div class="d-flex flex-wrap gap-1 mt-2">
          <button type="button" class="btn btn-outline-secondary btn-sm py-0 px-2 quick-move-btn" data-target="day1" style="font-size: 0.7rem;">D1</button>
          <button type="button" class="btn btn-outline-secondary btn-sm py-0 px-2 quick-move-btn" data-target="day2" style="font-size: 0.7rem;">D2</button>
          <button type="button" class="btn btn-outline-secondary btn-sm py-0 px-2 quick-move-btn" data-target="day3" style="font-size: 0.7rem;">D3</button>
          <button type="button" class="btn btn-outline-danger btn-sm py-0 px-2 ms-auto quick-move-btn" data-target="pool" style="font-size: 0.7rem;" title="Remove from day"><i class="fa-solid fa-rotate-left"></i></button>
        </div>
      </div>
    `);
  }

  function syncBoardToStorage() {
    const it = { day1: [], day2: [], day3: [] };
    ["day1", "day2", "day3"].forEach(day => {
      $(`#${day}Column .planner-card`).each(function () {
        it[day].push($(this).attr("data-id"));
      });
    });
    window.NomadWay.saveItinerary(it);
    updateBudgetUI(it);
  }

  function updateBudgetUI(it) {
    const target = parseFloat($("#budgetTargetInput").val() || getTargetBudget());
    let spent = 0;
    ["day1", "day2", "day3"].forEach(day => {
      it[day].forEach(id => {
        if (destinationsMap[id]) spent += destinationsMap[id].priceUsd;
      });
    });

    const pct = target > 0 ? Math.min(100, Math.round((spent / target) * 100)) : 0;
    $("#plannedSpentVal").text(`$${spent}`);
    $("#budgetPercentLabel").text(`${pct}%`);

    const $bar = $("#budgetProgressBar");
    $bar.css("width", pct + "%").attr("aria-valuenow", pct);
    if (spent > target) {
      $bar.removeClass("bg-success bg-warning").addClass("bg-danger");
    } else if (pct >= 80) {
      $bar.removeClass("bg-success bg-danger").addClass("bg-warning");
    } else {
      $bar.removeClass("bg-warning bg-danger").addClass("bg-success");
    }
  }

  function renderBoard() {
    const it = window.NomadWay.getItinerary();
    const assigned = new Set([...it.day1, ...it.day2, ...it.day3]);

    $("#poolColumn, #day1Column, #day2Column, #day3Column").empty();

    Object.values(destinationsMap).forEach(item => {
      if (!assigned.has(item.id)) {
        $("#poolColumn").append(createPlannerCard(item));
      }
    });

    ["day1", "day2", "day3"].forEach(day => {
      it[day].forEach(id => {
        if (destinationsMap[id]) {
          $(`#${day}Column`).append(createPlannerCard(destinationsMap[id]));
        }
      });
    });

    updateBudgetUI(it);
  }

  function copyItineraryToClipboard() {
    const it = window.NomadWay.getItinerary();
    const lang = window.NomadWay.getLang();
    let total = 0;
    const lines = ["NomadWay 3-Day Kazakhstan Itinerary", "=================================="];

    [["Day 1", it.day1], ["Day 2", it.day2], ["Day 3", it.day3]].forEach(([label, ids]) => {
      if (!ids.length) {
        lines.push(`${label}: (No stops assigned)`);
      } else {
        const names = ids.map(id => {
          const d = destinationsMap[id];
          if (!d) return id;
          total += d.priceUsd;
          return `${d.title[lang]} ($${d.priceUsd})`;
        });
        lines.push(`${label}: ${names.join(" -> ")}`);
      }
    });
    lines.push(`Total Estimated Budget: $${total}`);
    const text = lines.join("\n");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        window.NomadWay.showToast("Itinerary copied to clipboard!", "success");
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const $ta = $("<textarea>").val(text).appendTo("body").select();
    document.execCommand("copy");
    $ta.remove();
    window.NomadWay.showToast("Itinerary copied to clipboard!", "success");
  }

  async function initPlannerPage() {
    if (!$("#plannerBoard").length) return;
    const list = await window.loadJsonResource("data/destinations.json", "destinations");
    list.forEach(d => { destinationsMap[d.id] = d; });

    $("#budgetTargetInput").val(getTargetBudget());
    renderBoard();

    $(".planner-dropzone").sortable({
      connectWith: ".planner-dropzone",
      items: ".planner-card",
      tolerance: "pointer",
      over: function () { $(this).addClass("is-drop-active"); },
      out: function () { $(this).removeClass("is-drop-active"); },
      receive: function () { $(this).removeClass("is-drop-active"); },
      stop: function () {
        $(".planner-dropzone").removeClass("is-drop-active");
        syncBoardToStorage();
      }
    }).disableSelection();

    $(document).on("click", ".quick-move-btn", function () {
      const target = $(this).attr("data-target");
      const $card = $(this).closest(".planner-card");
      const $destCol = target === "pool" ? $("#poolColumn") : $(`#${target}Column`);
      $card.fadeOut(120, function () {
        $destCol.append($card);
        $card.fadeIn(150);
        syncBoardToStorage();
      });
    });

    $("#budgetTargetInput").on("input change", function () {
      const val = parseFloat($(this).val());
      if (Number.isFinite(val) && val > 0) {
        localStorage.setItem(window.NomadWay.STORAGE_KEYS.budget, String(val));
      }
      updateBudgetUI(window.NomadWay.getItinerary());
    });

    $("#copyItineraryBtn").on("click", copyItineraryToClipboard);

    $("#loadSampleTripBtn").on("click", function () {
      window.NomadWay.saveItinerary({
        day1: ["astana", "burabay"],
        day2: ["charyn", "kolsai"],
        day3: ["shymbulak"]
      });
      renderBoard();
      window.NomadWay.showToast("Sample 3-day Kazakhstan trip loaded!", "info");
    });

    $("#resetBoardBtn").on("click", function () {
      window.NomadWay.saveItinerary({ day1: [], day2: [], day3: [] });
      renderBoard();
      window.NomadWay.showToast("Trip board cleared.", "warning");
    });

    $(document).on("nomadway:langchange", renderBoard);
  }

  $(document).ready(initPlannerPage);
})(window, jQuery);
