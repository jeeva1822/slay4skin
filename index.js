// Select elements
var sidenav = document.querySelector(".sidenavbar");
var toggleButton = document.getElementById("toggleButton");
var closeButton = document.getElementById("closeButton");

// Function to open the sidenav
toggleButton.addEventListener("click", function() {
    sidenav.classList.add("open");  // Add 'open' class to display sidenav
});

// Function to close the sidenav
closeButton.addEventListener("click", function() {
    sidenav.classList.remove("open");  // Remove 'open' class to hide sidenav
});


