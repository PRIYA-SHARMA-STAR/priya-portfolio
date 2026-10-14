
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Open and close the mobile navigation
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Display the current year in the footer
document.getElementById("current-year").textContent =
    new Date().getFullYear();
