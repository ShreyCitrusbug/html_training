document.addEventListener("DOMContentLoaded", () => {
    const collapseToggle = document.getElementById("collapse-toggle");
    const sidebar = document.querySelector(".sidebar-wrapper");
    const middleSection = document.querySelector(".middle-content");

    collapseToggle.addEventListener("click", function (e) {
        e.preventDefault();
        sidebar.classList.toggle("collapsed");
        middleSection.classList.toggle("collapsed");
    });
})