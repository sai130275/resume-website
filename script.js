// JavaScript for Interactive Features

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "Toggle Dark Mode";
    darkModeToggle.classList.add("dark-mode-btn");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Back to Top Button
    const backToTopBtn = document.createElement("button");
    backToTopBtn.innerText = "↑ Top";
    backToTopBtn.classList.add("back-to-top");
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Typing Effect for Name
    const nameElement = document.querySelector(".sidebar h1");
    if (nameElement) {
        const nameText = nameElement.innerText;
        nameElement.innerText = "";
        let i = 0;
        function typeEffect() {
            if (i < nameText.length) {
                nameElement.innerText += nameText.charAt(i);
                i++;
                setTimeout(typeEffect, 100);
            }
        }
        typeEffect();
    }

    // Theme Switcher (Multiple Themes)
    const themeSwitcher = document.createElement("select");
    themeSwitcher.innerHTML = `
        <option value="default">Default</option>
        <option value="dark">Dark Mode</option>
        <option value="blue">Blue Theme</option>
    `;
    themeSwitcher.classList.add("theme-switcher");
    document.body.appendChild(themeSwitcher);

    themeSwitcher.addEventListener("change", function () {
        document.body.classList.remove("dark-mode", "blue-theme");
        if (this.value === "dark") {
            document.body.classList.add("dark-mode");
        } else if (this.value === "blue") {
            document.body.classList.add("blue-theme");
        }
        localStorage.setItem("theme", this.value);
    });

    if (localStorage.getItem("theme")) {
        themeSwitcher.value = localStorage.getItem("theme");
        themeSwitcher.dispatchEvent(new Event("change"));
    }
});
