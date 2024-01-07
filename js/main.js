// DarkMode toggle
function darkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains("dark-mode");
    const darkModeToggle = document.getElementById("checkbox");
    const darkModeLabel = document.querySelector(".checkbox-label");

    // Toggle the dark mode class
    body.classList.toggle("dark-mode");

    // Update the appearance of the dark mode toggle button
    if (isDarkMode) {
        darkModeToggle.checked = false;
        darkModeLabel.classList.remove("dark-mode");
    } else {
        darkModeToggle.checked = true;
        darkModeLabel.classList.add("dark-mode");
    }

    // Store the state of dark mode in local storage
    localStorage.setItem("darkMode", isDarkMode ? "off" : "on");
}

// Check if dark mode was previously enabled and set it on page load
window.addEventListener("load", function () {
    const darkModeState = localStorage.getItem("darkMode");
    if (darkModeState === "on") {
        document.body.classList.add("dark-mode");

        // Update the appearance of the dark mode toggle button
        const darkModeToggle = document.getElementById("checkbox");
        const darkModeLabel = document.querySelector(".checkbox-label");
        darkModeToggle.checked = true;
        darkModeLabel.classList.add("dark-mode");
    }
});