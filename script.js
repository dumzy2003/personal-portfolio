
/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show-menu");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("show-menu")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });
}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
========================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show-menu");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.querySelector(".typing-text");

if (typingText) {
    const words = [
        " | Web Developer",
        " | Data Analyst",
        " | Problem Solver"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingText.textContent =
                currentWord.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);
                return;

            }

        } else {

            typingText.textContent =
                currentWord.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

            }

        }

        const speed = deleting ? 50 : 100;

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const animatedElements = document.querySelectorAll(
    ".section, .hero-content, .hero-image"
);

if (animatedElements.length) {
    const revealContent = () => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight + 80) {
                element.classList.add("show");
            }
        });
    };

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        revealContent();
    }

    revealContent();
}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (typeof emailjs !== 'undefined') {
    emailjs.init('icxbZ4EChI2i1O9Nj');
}

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const titleEl = document.getElementById("subject");
        const title = titleEl ? titleEl.value.trim() : "";
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {

            formMessage.textContent = "Please fill in all the fields.";

            return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        formMessage.textContent = "Sending...";

        if (typeof emailjs === 'undefined') {
            formMessage.textContent = "Email service not loaded. Please check the SDK include.";
            submitBtn.disabled = false;
            return;
        }

        emailjs.sendForm('service_03es9pp', 'template_8ne4cj8', this)
            .then(function() {
                formMessage.textContent = "Message sent — We'll get back to you soon!";
                contactForm.reset();
                submitBtn.disabled = false;
            }, function(error) {
                console.error('EmailJS error:', error);
                formMessage.textContent = "Oops — something went wrong. Please try again later.";
                submitBtn.disabled = false;
            });

    });
}


/* =========================================
   FOOTER YEAR
========================================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
