// =============================
// Gitanshu Sonkar Portfolio
// script.js
// =============================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1800);
});

// =============================
// Typing Effect
// =============================

const typing = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "JavaScript Developer",
    "UI Designer",
    "Creative Coder",
    "Web Designer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, letterIndex--);

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// =============================
// Theme Toggle
// =============================

const themeBtn = document.getElementById("theme");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

};

// Load saved theme

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}

// =============================
// Language Switch
// =============================

const language = document.getElementById("language");

language.addEventListener("change", () => {

    const heroTitle =
        document.querySelector("#home h3");

    const about =
        document.querySelector(".glass p");

    if (language.value === "hi") {

        heroTitle.innerHTML = "नमस्ते मैं हूँ";

        about.innerHTML =
            "मैं गितांशु सोनकर हूँ। एक उत्साही वेब डेवलपर और UI डिज़ाइनर हूँ।";

    } else if (language.value === "jp") {

        heroTitle.innerHTML = "こんにちは";

        about.innerHTML =
            "私はギタンシュ・ソンカーです。Web開発者です。";

    } else {

        heroTitle.innerHTML = "Hello I'm";

        about.innerHTML =
            "I'm Gitanshu Sonkar. A passionate Web Developer and UI Designer.";

    }

});

// =============================
// Scroll Progress Bar
// =============================

window.addEventListener("scroll", () => {

    const progress =
        document.querySelector(".scrollBar");

    const totalHeight =
        document.body.scrollHeight -
        window.innerHeight;

    const percentage =
        (window.scrollY / totalHeight) * 100;

    progress.style.width = percentage + "%";

});

// =============================
// Back To Top
// =============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400)

        topBtn.style.display = "block";

    else

        topBtn.style.display = "none";

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// =============================
// Reveal Animation
// =============================

const sections =
    document.querySelectorAll("section");

const reveal = () => {

    sections.forEach(sec => {

        const top =
            sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            sec.style.opacity = "1";

            sec.style.transform =
                "translateY(0px)";

        }

    });

};

sections.forEach(sec => {

    sec.style.opacity = "0";

    sec.style.transform =
        "translateY(80px)";

    sec.style.transition = "1s";

});

window.addEventListener("scroll", reveal);

reveal();

// =============================
// Active Navigation
// =============================

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(sec => {

        const sectionTop =
            sec.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = sec.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") ==
            "#" + current)

            link.classList.add("active");

    });

});

// =============================
// Contact Validation
// =============================

const form =
    document.querySelector("form");

form.addEventListener("submit", e => {

    e.preventDefault();

    const inputs =
        form.querySelectorAll("input,textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() == "") {

            input.style.border =
                "2px solid red";

            valid = false;

        } else {

            input.style.border =
                "2px solid lime";

        }

    });

    if (valid) {

        alert(
            "Thank You! Your message has been sent."
        );

        form.reset();

    }

});

// =============================
// Console Signature
// =============================

console.log(
    "%cGitanshu Sonkar Portfolio",
    "color:#00f5ff;font-size:22px;font-weight:bold;"
);

console.log(
    "Developed with HTML, CSS & JavaScript"
);