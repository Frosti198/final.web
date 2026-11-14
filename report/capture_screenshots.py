import functools
import http.server
import os
import socketserver
import threading
import time
from playwright.sync_api import sync_playwright

BASE_DIR = "/home/erolox/web/final_project"
SCREENSHOTS_DIR = os.path.join(BASE_DIR, "screenshots")
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


def start_server():
    handler = functools.partial(QuietHandler, directory=BASE_DIR)
    httpd = socketserver.TCPServer(("127.0.0.1", 0), handler)
    port = httpd.server_address[1]
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd, port


def run_verification():
    httpd, port = start_server()
    base_url = f"http://127.0.0.1:{port}"
    errors = []

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(executable_path="/usr/bin/chromium", headless=True)
            context = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=2)
            page = context.new_page()

            page.on("pageerror", lambda err: errors.append(f"PAGEERROR: {err}"))
            page.on(
                "response",
                lambda res: errors.append(f"HTTP {res.status}: {res.url}")
                if res.status >= 400
                else None,
            )
            page.on(
                "console",
                lambda msg: errors.append(f"CONSOLE {msg.type}: {msg.text}")
                if msg.type == "error"
                else None,
            )

            # 1. Home page (EN, Light) + Counters + Custom Carousel + Featured 3
            page.goto(f"{base_url}/index.html", wait_until="networkidle")
            page.wait_for_timeout(700)
            assert page.locator("#homeFeaturedGrid article").count() == 3
            page.locator(".nw-carousel-next").click()
            page.wait_for_timeout(400)
            page.evaluate("window.scrollTo(0, 620)")
            page.wait_for_timeout(1600)
            page.evaluate("window.scrollTo(0, 0)")
            page.wait_for_timeout(300)
            page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "01_home_desktop.png"))

            # 2. Switch to Dark Mode + KZ + Quick Finder Match
            page.locator("#themeToggleBtn").click()
            page.locator('.lang-switch-btn[data-lang="kz"]').click()
            page.wait_for_timeout(300)
            assert page.evaluate("document.documentElement.getAttribute('data-theme')") == "dark"
            assert page.evaluate("localStorage.getItem('nomadway_lang')") == "kz"
            page.locator("#quickMatchBtn").click()
            page.wait_for_timeout(350)
            page.evaluate("window.scrollTo(0, 1450)")
            page.wait_for_timeout(450)
            page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "02_home_dark_kz.png"))

            # Reset to Light + EN for catalog screenshots
            page.locator("#themeToggleBtn").click()
            page.locator('.lang-switch-btn[data-lang="en"]').click()
            page.wait_for_timeout(250)

            # 3. Destinations Catalog (9 cards = 3x3 grid) + Search/Sort + Custom Modal
            page.goto(f"{base_url}/destinations.html", wait_until="networkidle")
            page.wait_for_timeout(600)
            assert page.locator("#destinationsGrid article").count() == 9
            assert page.locator("#destCountBadge").inner_text().strip() == "9"
            page.locator("#destSortSelect").select_option("price-asc")
            page.wait_for_timeout(450)
            page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "03_destinations_catalog.png"))

            page.locator(".btn-open-custom-modal").first.click()
            page.wait_for_timeout(400)
            assert page.locator("#nwCustomModalBackdrop").is_visible()
            page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "04_destinations_custom_modal.png"))

            page.locator("#customModalAddBtn").click()
            page.wait_for_timeout(300)
            page.locator("#customModalCloseBtn").click()
            page.wait_for_timeout(300)

            # 4. Trip Planner (Drag/Drop + Quick Move + Budget + Checklist + Copy)
            page.goto(f"{base_url}/planner.html", wait_until="networkidle")
            page.wait_for_timeout(500)
            page.locator("#loadSampleTripBtn").click()
            page.wait_for_timeout(400)
            assert page.locator("#day1Column .planner-card").count() >= 1
            assert page.locator("#dayBreakdownList > div").count() == 3
            assert page.locator("#smartPackingChecklist .packing-check").count() >= 3
            page.locator("#smartPackingChecklist .packing-check").first.check()
            page.locator("#copyItineraryBtn").click()
            page.wait_for_timeout(350)
            page.evaluate("window.scrollTo(0, 260)")
            page.wait_for_timeout(200)
            page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "05_planner_drag_drop.png"))

            # 5. Guides & Quiz in RU
            page.goto(f"{base_url}/guides.html", wait_until="networkidle")
            page.wait_for_timeout(500)
            page.locator('.lang-switch-btn[data-lang="ru"]').click()
            page.wait_for_timeout(350)
            # Answer all 5 questions correctly (indices: 1, 1, 0, 0, 0)
            correct = {1: 1, 2: 1, 3: 0, 4: 0, 5: 0}
            for qid, idx in correct.items():
                page.locator(f'input[name="quiz_q_{qid}"][value="{idx}"]').check()
            page.locator("#submitQuizBtn").click()
            page.wait_for_timeout(400)
            assert "5 / 5" in page.locator("#quizScoreAlert").inner_text()
            page.evaluate("window.scrollTo(0, 450)")
            page.wait_for_timeout(400)
            page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "06_guides_quiz_ru.png"))

            # Switch back to EN
            page.locator('.lang-switch-btn[data-lang="en"]').click()
            page.wait_for_timeout(200)

            # 6. Contact Form Validation & Confetti Success
            page.goto(f"{base_url}/contact.html", wait_until="networkidle")
            page.wait_for_timeout(500)
            page.locator('#bookingForm button[type="submit"]').click()
            page.wait_for_timeout(350)
            assert page.locator("#bookingName.is-invalid").count() == 1
            page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "07_contact_validation_errors.png"))

            page.fill("#bookingName", "Askar Nurmukhammed")
            page.fill("#bookingEmail", "askar.nurmukhammed@astanait.edu.kz")
            page.fill("#bookingPhone", "+7 701 555 2514")
            page.locator("#bookingDestination").select_option("kolsai")
            page.fill("#bookingDate", "2027-06-15")
            page.fill("#bookingTravelers", "3")
            page.fill("#bookingNotes", "Looking for a 3-day guided alpine photography route with mountain lodge stay.")
            page.locator("#bookingConsent").check()
            page.locator('#bookingForm button[type="submit"]').click()
            page.wait_for_timeout(500)
            assert page.locator("#bookingSuccessBanner").is_visible()
            page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "08_contact_booking_success.png"))

            # 7. Tablet & Mobile Responsive Views
            tablet_page = browser.new_page(viewport={"width": 768, "height": 1024}, device_scale_factor=2)
            tablet_page.on("pageerror", lambda err: errors.append(f"TABLET PAGEERROR: {err}"))
            tablet_page.goto(f"{base_url}/destinations.html", wait_until="networkidle")
            tablet_page.wait_for_timeout(600)
            overflow_tablet = tablet_page.evaluate("document.documentElement.scrollWidth > window.innerWidth")
            assert not overflow_tablet, "Horizontal overflow detected on tablet!"
            tablet_page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "09_responsive_tablet.png"))
            tablet_page.close()

            mobile_page = browser.new_page(viewport={"width": 375, "height": 812}, device_scale_factor=2)
            mobile_page.on("pageerror", lambda err: errors.append(f"MOBILE PAGEERROR: {err}"))
            mobile_page.goto(f"{base_url}/index.html", wait_until="networkidle")
            mobile_page.wait_for_timeout(600)
            overflow_mobile = mobile_page.evaluate("document.documentElement.scrollWidth > window.innerWidth")
            assert not overflow_mobile, "Horizontal overflow detected on mobile!"
            mobile_page.screenshot(path=os.path.join(SCREENSHOTS_DIR, "10_responsive_mobile.png"))
            mobile_page.close()

            # 8. Verify file:// protocol fallback works cleanly
            file_page = browser.new_page(viewport={"width": 1280, "height": 800})
            file_errors = []
            file_page.on("pageerror", lambda err: file_errors.append(f"FILE PAGEERROR: {err}"))
            file_page.goto(f"file://{BASE_DIR}/destinations.html", wait_until="networkidle")
            file_page.wait_for_timeout(500)
            assert file_page.locator("#destinationsGrid article").count() == 9
            assert not file_errors, f"file:// errors: {file_errors}"
            file_page.close()

            browser.close()
    finally:
        httpd.shutdown()

    if errors:
        raise RuntimeError("Browser errors detected:\n" + "\n".join(errors))

    print("ALL VERIFICATION CHECKS PASSED WITH 0 ERRORS!")
    for fn in sorted(os.listdir(SCREENSHOTS_DIR)):
        print(" - screenshot:", fn)


if __name__ == "__main__":
    run_verification()
