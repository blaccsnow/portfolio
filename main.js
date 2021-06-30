let navOpener = document.getElementById("menu-button");
let sideNav = document.getElementById("sidebar");
let mainDocument = document.getElementById("main");
let navCloser = document.getElementById("close-bar");

navOpener.addEventListener('click', function() {
 sideNav.style.width = "60%";
 mainDocument.style.opacity = "50%";
 navOpener.style.display = "none";
});

navCloser.addEventListener('click', function() {
 sideNav.style.width = "0%";
 mainDocument.style.opacity = "100%";
 navOpener.style.display = "block";
});

sideNav.addEventListener('click', function() {
 sideNav.style.width = "0%";
 mainDocument.style.opacity = "100%";
 navOpener.style.display = "block";
});
