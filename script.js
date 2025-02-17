alert("Halo selamat datang di CV saya-!!")
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.querySelectorAll(".menu-links a").forEach(link => {
    link.addEventListener("click", () => {
        toggleMenu(); 
    });
});