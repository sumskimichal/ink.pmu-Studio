const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('sticky-mobileNav')
}
navBtn.addEventListener('click', handleNav)
navMobile.addEventListener('click', handleNav)
