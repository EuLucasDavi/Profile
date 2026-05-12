/*!
                ? target
                : $("[name=" + this.hash.slice(1) + "]");

            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );

                return false;
            }
        }
    });

    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    $("body").scrollspy({
        target: "#sideNav",
    });

})(jQuery);


/* =========================
   DARK MODE MODERNO
========================= */

const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

function applyTheme(theme) {
    body.setAttribute("data-theme", theme);

    if (theme === "dark") {
        themeIcon.textContent = "☀️";
    } else {
        themeIcon.textContent = "🌙";
    }
}

function detectPreferredTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        return savedTheme;
    }

    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    return prefersDark ? "dark" : "light";
}

applyTheme(detectPreferredTheme());


themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    applyTheme(newTheme);

    localStorage.setItem("theme", newTheme);
});


window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {

        if (!localStorage.getItem("theme")) {
            applyTheme(
                event.matches
                    ? "dark"
                    : "light"
            );
        }
    });