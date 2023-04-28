const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer_year')
const navLinks = document.querySelectorAll('.nav__link')

const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')

}
navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        navBtn.classList.remove('is-active')
        navMobile.classList.remove('nav-mobile--active')
    });
});

const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year
}
handleCurrentYear()

navBtn.addEventListener('click', handleNav)
