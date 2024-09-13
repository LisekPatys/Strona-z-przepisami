document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const leftPanel = document.getElementById("left");

    toggleButton.addEventListener("click", function () {
        // Przełącz klasę "show", aby pokazać/ukryć panel
        leftPanel.classList.toggle("show");
    });
});
