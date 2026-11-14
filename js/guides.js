/**
 * Guides & Quiz Page Logic:
 * - JSON-rendered local guides (guides.json)
 * - Interactive 5-question Travel Readiness Quiz with live score
 */
(function (window, $) {
  "use strict";

  let guidesData = null;
  let userAnswers = {};

  function renderGuides() {
    const $container = $("#guidesGrid");
    if (!$container.length || !guidesData) return;

    const lang = window.NomadWay.getLang();
    $container.empty();

    guidesData.guides.forEach(g => {
      const langBadges = g.languages
        .map(l => `<span class="badge bg-primary bg-opacity-10 text-accent border border-primary border-opacity-25">${l}</span>`)
        .join(" ");

      $container.append(`
        <div class="col-md-6 col-lg-4">
          <div class="nw-card nw-card-hover p-4 h-100 text-center d-flex flex-column">
            <img src="${g.image}" alt="${g.name}" loading="lazy" class="rounded-circle mx-auto mb-3 border border-3 border-primary" style="width: 96px; height: 96px; object-fit: cover;">
            <h5 class="fw-bold mb-1">${g.name}</h5>
            <div class="small text-accent fw-semibold mb-2">${g.role[lang]}</div>
            <p class="small text-muted flex-grow-1 mb-3">${g.specialty[lang]}</p>
            <div class="d-flex justify-content-center gap-1 mb-3">${langBadges}</div>
            <div class="pt-3 border-top d-flex justify-content-between small text-muted">
              <span><i class="fa-solid fa-briefcase me-1 text-accent"></i>${g.experienceYears} yrs</span>
              <span><i class="fa-solid fa-star text-warning me-1"></i>${g.rating.toFixed(2)}</span>
            </div>
          </div>
        </div>
      `);
    });
  }

  function renderQuiz() {
    const $quizBox = $("#readinessQuizContainer");
    if (!$quizBox.length || !guidesData) return;

    const lang = window.NomadWay.getLang();
    $quizBox.empty();

    guidesData.quiz.forEach((q, idx) => {
      const optsHtml = q.options[lang].map((opt, optIdx) => {
        const checked = userAnswers[q.id] === optIdx ? "checked" : "";
        return `
          <label class="d-flex align-items-center gap-2 p-2 rounded-3 border mb-2 quiz-option-label" style="cursor: pointer;">
            <input type="radio" class="form-check-input mt-0 quiz-radio" name="quiz_q_${q.id}" value="${optIdx}" data-qid="${q.id}" ${checked}>
            <span class="small">${opt}</span>
          </label>
        `;
      }).join("");

      $quizBox.append(`
        <div class="mb-4 pb-3 border-bottom" data-question-id="${q.id}">
          <h6 class="fw-bold mb-3">${idx + 1}. ${q.question[lang]}</h6>
          ${optsHtml}
        </div>
      `);
    });
  }

  function evaluateQuiz() {
    if (!guidesData) return;
    let score = 0;
    const total = guidesData.quiz.length;

    guidesData.quiz.forEach(q => {
      const $block = $(`[data-question-id="${q.id}"]`);
      $block.find(".quiz-option-label").removeClass("border-success border-danger bg-success bg-opacity-10 bg-danger bg-opacity-10");

      const chosen = userAnswers[q.id];
      const $labels = $block.find(".quiz-option-label");
      $labels.eq(q.correctIndex).addClass("border-success bg-success bg-opacity-10");

      if (chosen === q.correctIndex) {
        score++;
      } else if (chosen !== undefined) {
        $labels.eq(chosen).addClass("border-danger bg-danger bg-opacity-10");
      }
    });

    const pct = Math.round((score / total) * 100);
    $("#quizScoreAlert")
      .removeClass("d-none alert-success alert-warning")
      .addClass(pct >= 60 ? "alert-success" : "alert-warning")
      .html(`<i class="fa-solid fa-award me-2"></i><strong>Score: ${score} / ${total} (${pct}%)</strong> — ${pct >= 80 ? "Expedition Expert!" : "Keep exploring the guides!"}`)
      .hide()
      .fadeIn(200);

    window.NomadWay.showToast(`Quiz score: ${score}/${total} (${pct}%)`, pct >= 60 ? "success" : "warning");
  }

  async function initGuidesPage() {
    if (!$("#guidesGrid").length && !$("#readinessQuizContainer").length) return;
    guidesData = await window.loadJsonResource("data/guides.json", "guides");
    renderGuides();
    renderQuiz();

    $(document).on("change", ".quiz-radio", function () {
      const qid = parseInt($(this).attr("data-qid"), 10);
      userAnswers[qid] = parseInt($(this).val(), 10);
    });

    $("#submitQuizBtn").on("click", evaluateQuiz);
    $("#resetQuizBtn").on("click", function () {
      userAnswers = {};
      $("#quizScoreAlert").addClass("d-none");
      renderQuiz();
    });

    $(document).on("nomadway:langchange", function () {
      renderGuides();
      renderQuiz();
    });
  }

  $(document).ready(initGuidesPage);
})(window, jQuery);
