/**
 * Contact & Booking Page Logic:
 * - Dynamic destination dropdown populated from destinations.json
 * - Enhanced Client-Side Form Validation with animated feedback
 * - Canvas Confetti Celebration upon successful booking
 */
(function (window, $) {
  "use strict";

  function launchConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#4f46e5", "#06b6d4", "#10b981", "#f59e0b", "#ec4899"];
    const pieces = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.5,
      w: 6 + Math.random() * 6,
      h: 8 + Math.random() * 8,
      vx: -2 + Math.random() * 4,
      vy: 3 + Math.random() * 4,
      rot: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += 0.06;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (frame < 130) {
        requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(draw);
  }

  async function populateDestinationsDropdown() {
    const $select = $("#bookingDestination");
    if (!$select.length) return;
    const currentVal = $select.val();
    const list = await window.loadJsonResource("data/destinations.json", "destinations");
    const lang = window.NomadWay.getLang();

    $select.find("option:not(:first)").remove();
    list.forEach(d => {
      $select.append(`<option value="${d.id}">${d.title[lang]} ($${d.priceUsd})</option>`);
    });
    if (currentVal) $select.val(currentVal);
  }

  function initBookingForm() {
    const form = document.getElementById("bookingForm");
    if (!form) return;

    const todayStr = new Date().toISOString().split("T")[0];
    const dateInput = document.getElementById("bookingDate");
    if (dateInput) dateInput.setAttribute("min", todayStr);

    const validators = {
      bookingName: {
        check: val => /^[A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі\s'-]{3,60}$/.test(val.trim()),
        errorId: "errBookingName",
        msg: "Enter at least 3 alphabetic characters."
      },
      bookingEmail: {
        check: val => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim()),
        errorId: "errBookingEmail",
        msg: "Enter a valid email address."
      },
      bookingPhone: {
        check: val => /^\+?[0-9\s\-()]{10,18}$/.test(val.trim()),
        errorId: "errBookingPhone",
        msg: "Enter a valid phone number (e.g. +7 701 000 0000)."
      },
      bookingDestination: {
        check: val => val !== "",
        errorId: "errBookingDestination",
        msg: "Please choose a destination."
      },
      bookingDate: {
        check: val => val !== "" && val >= todayStr,
        errorId: "errBookingDate",
        msg: "Choose today or a future departure date."
      },
      bookingTravelers: {
        check: val => {
          const n = parseInt(val, 10);
          return Number.isFinite(n) && n >= 1 && n <= 20;
        },
        errorId: "errBookingTravelers",
        msg: "Travelers must be between 1 and 20."
      },
      bookingNotes: {
        check: val => val.trim().length >= 20,
        errorId: "errBookingNotes",
        msg: "Please write at least 20 characters about your trip preferences."
      },
      bookingConsent: {
        check: (_val, el) => el.checked,
        errorId: "errBookingConsent",
        msg: "Consent is required to submit."
      }
    };

    function validateField(id) {
      const el = document.getElementById(id);
      const rule = validators[id];
      const errEl = document.getElementById(rule.errorId);
      const valid = rule.check(el.value, el);

      el.classList.remove("is-invalid-animated");
      if (valid) {
        el.classList.remove("is-invalid");
        el.classList.add("is-valid");
        if (errEl) errEl.textContent = "";
      } else {
        el.classList.remove("is-valid");
        el.classList.add("is-invalid");
        void el.offsetWidth;
        el.classList.add("is-invalid-animated");
        if (errEl) errEl.textContent = rule.msg;
      }
      return valid;
    }

    Object.keys(validators).forEach(id => {
      const el = document.getElementById(id);
      const ev = el.tagName === "SELECT" || el.type === "checkbox" || el.type === "date" ? "change" : "input";
      el.addEventListener(ev, () => validateField(id));
    });

    $("#bookingNotes").on("input", function () {
      $("#notesCharCounter").text(`${this.value.length} / 20 min`);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let allValid = true;
      Object.keys(validators).forEach(id => {
        if (!validateField(id)) allValid = false;
      });

      if (!allValid) {
        const firstBad = form.querySelector(".is-invalid");
        if (firstBad) firstBad.focus();
        window.NomadWay.showToast("Please fix the highlighted form fields.", "error");
        return;
      }

      const refCode = "NW-" + Math.floor(100000 + Math.random() * 900000);
      const guestName = $("#bookingName").val().trim();
      const destLabel = $("#bookingDestination option:selected").text();

      $("#bookingRefCode").text(`${refCode} • ${guestName} (${destLabel})`);
      $("#bookingSuccessBanner").removeClass("d-none").hide().fadeIn(260);
      launchConfetti();
      window.NomadWay.showToast(`Booking ${refCode} confirmed!`, "success");

      form.reset();
      Object.keys(validators).forEach(id => document.getElementById(id).classList.remove("is-valid"));
      $("#notesCharCounter").text("0 / 20 min");
    });
  }

  $(document).ready(async function () {
    await populateDestinationsDropdown();
    initBookingForm();
    $(document).on("nomadway:langchange", populateDestinationsDropdown);
  });
})(window, jQuery);
