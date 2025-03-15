const menuButton = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.link-list')


menuButton.addEventListener("click", () =>{
  navMenu.classList.toggle('active')
  menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active'))
 
})
