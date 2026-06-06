const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
mobileNav.classList.add("active");
overlay.classList.add("active");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu(){
mobileNav.classList.remove("active");
overlay.classList.remove("active");
}
