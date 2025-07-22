document.addEventListener("DOMContentLoaded", () => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const logo = document.getElementById("logo");
    const collapseToggle = document.getElementById("collapse-toggle");
    const sidebar = document.querySelector(".sidebar-wrapper");
    const middleSection = document.querySelector(".middle-content");
    const profileButton = document.getElementById("profileButton");
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    // profile dropdown js
    profileButton.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function () {
        dropdownMenu.classList.remove('show');
    });

    // sidebar collapse js
    collapseToggle.addEventListener("click", function (e) {
        const isCollapsed = sidebar.classList.toggle("collapsed");
        if (!isSmallScreen) {
            e.preventDefault();
            middleSection.classList.toggle("collapsed");

            if (isCollapsed) {
                logo.src = "../assets/images/voyage_logo.png";
                logo.style.maxWidth = "60px";
            } else {
                logo.src = "../assets/images/logo container.png";
                logo.style.maxWidth = "200px";
            }
        }
    });

    // hamburger menu js
    hamburgerMenu.addEventListener("click", function (e) {
        const isExpanded = sidebar.classList.toggle("expand");
        hamburgerMenu.src = isExpanded
            ? "../assets/images/close.png"
            : "../assets/images/burger-bar.png";
        middleSection.style.zIndex = isExpanded ? "1" : "";
        middleSection.style.position = isExpanded ? "relative" : "";
    });

    // Main Street Dropdown js
    const mainStreetDropdown = document.getElementById('mainStreetTower');
    const mainStreetDropdownContent = document.getElementById('mainStreetDropdownContent');
    mainStreetDropdown.addEventListener('click', () => {
        console.log("clicked,,")
        mainStreetDropdownContent.classList.toggle('show');
    });

})