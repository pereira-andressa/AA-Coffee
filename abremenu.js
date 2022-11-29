const iconOpen = document.getElementById('iconOpen');
const iconClose = document.getElementById('iconClose');
const aside = document.getElementById('aside');

const manipularMenu = () => {
  aside.classList.toggle('menu_flutuante')
}

iconOpen.addEventListener('click', manipularMenu)
iconClose.addEventListener('click', manipularMenu)




