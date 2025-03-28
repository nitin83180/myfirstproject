document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Responsive Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("input[type='text']").value;
        const email = document.querySelector("input[type='email']").value;
        const message = document.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
        } else {
            alert("Message sent successfully!");
            form.reset();
        }
    });
});
