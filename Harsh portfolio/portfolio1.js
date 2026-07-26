// ==========================================
// Portfolio JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // Mobile Menu
    // ==========================================

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.createElement("div");

    mobileMenu.className = "mobile-menu";

    mobileMenu.innerHTML = `
        <span class="close-menu">&times;</span>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;

    document.body.appendChild(mobileMenu);

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    mobileMenu.querySelector(".close-menu").addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

    // ==========================================
    // Sticky Navbar
    // ==========================================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.background = "rgba(15,23,42,.95)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

        } else {

            header.style.background = "rgba(15,23,42,.75)";
            header.style.boxShadow = "none";

        }

    });

    // ==========================================
    // Back To Top
    // ==========================================

    const topBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    // ==========================================
    // Smooth Scroll
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ==========================================
    // Reveal Animation
    // ==========================================

    const reveals = document.querySelectorAll(

        ".about,.experience,.education,.stats,.skills,.services,.projects,.contact"

    );

    function reveal() {

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {

                item.classList.add("fade-up", "show");

            }

        });

    }

    reveal();

    window.addEventListener("scroll", reveal);

    // ==========================================
    // Contact Form
    // ==========================================

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const inputs = form.querySelectorAll("input,textarea");

            let valid = true;

            inputs.forEach(input => {

                if (input.value.trim() === "") {

                    valid = false;

                    input.style.borderColor = "red";

                } else {

                    input.style.borderColor = "#06B6D4";

                }

            });

            if (valid) {

                alert("Message sent successfully!");

                form.reset();

            }

        });

    }

    // ==========================================
    // Skill Bars Animation
    // ==========================================

    const bars = document.querySelectorAll(".progress-bar");

    function animateBars() {

        bars.forEach(bar => {

            const width = bar.textContent;

            bar.style.width = width;

        });

    }

    animateBars();

    // ==========================================
    // Active Navigation
    // ==========================================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            const height = section.offsetHeight;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    // ==========================================
    // Typing Effect
    // ==========================================

    const title = document.querySelector(".hero h2");

    if (title) {

        const words = [
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "UI Designer"
        ];

        let i = 0;

        function changeWord() {

            title.style.opacity = "0";

            setTimeout(() => {

                title.textContent = words[i];

                title.style.opacity = "1";

                i = (i + 1) % words.length;

            }, 300);

        }

        setInterval(changeWord, 2500);

    }

    // ==========================================
    // Hero Image Float
    // ==========================================

    const heroImg = document.querySelector(".hero-image img");

    if (heroImg) {

        let direction = 1;

        setInterval(() => {

            heroImg.style.transform = `translateY(${direction * 10}px)`;

            direction *= -1;

        }, 2000);

    }

});

// ==========================================
// Loader
// ==========================================

window.addEventListener("load", () => {

    const loader = document.createElement("div");

    loader.className = "loader";

    document.body.prepend(loader);

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

        }, 500);

    }, 800);

});