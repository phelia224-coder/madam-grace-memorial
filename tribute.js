// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       HAMBURGER NAVIGATION
    ========================== */

    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");

    if (hamburger && mobileNav && closeBtn && overlay) {

        hamburger.addEventListener("click", () => {
            mobileNav.classList.add("active");
            overlay.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            overlay.classList.remove("active");
        });

        overlay.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            overlay.classList.remove("active");
        });

        // Close menu when a navigation link is clicked
        const navLinks = mobileNav.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("active");
                overlay.classList.remove("active");
            });
        });
    }

    /* ==========================
       EXPANDABLE TRIBUTE CARDS
    ========================== */

    const tributeCards = document.querySelectorAll(".tribute-card");

    tributeCards.forEach(card => {

        const header = card.querySelector(".tribute-header");

        if (header) {

            header.addEventListener("click", () => {

                card.classList.toggle("active");

                const icon = header.querySelector("span");

                if (icon) {
                    icon.textContent =
                        card.classList.contains("active")
                            ? "−"
                            : "+";
                }

            });

        }

    });

});