// ==========================
// Hamburger Menu
// ==========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ==========================
// Persistent Dark Mode
// ==========================
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});


// ==========================
// Navbar Animation on Scroll
// ==========================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ==========================
// Reveal Sections on Scroll
// ==========================
function revealSections() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();
