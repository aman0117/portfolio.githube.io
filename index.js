const moblile_nav =document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector('.header');


const toggleNavbar = () => {
    // alert("non");
    nav_header.classList.toggle("active");
}

moblile_nav.addEventListener('click', () => toggleNavbar());