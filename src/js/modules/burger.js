const navigation = document.querySelector('.navigation');
const buttonBurger = document.querySelector('.navigation__burger');
const iconBurger = buttonBurger.querySelector('.icon');
const useIconBurger = iconBurger.querySelector('use');

const ICONS_PATH = './img/icons/icons.svg';
let isBurgerOpen = false;

const toggleClass = (element, ...classes) => {
  classes.forEach((classItem) => {
    element.classList.toggle(classItem)
  })
};

const openPopupMenu = () => {
  toggleClass(navigation, 'navigation--menu-close', 'navigation--menu-open');
  toggleClass(iconBurger, 'icon--burger-open', 'icon--close-button');
  toggleClass(buttonBurger, 'button-icon--burger-open', 'button-icon--close-button');

  isBurgerOpen = !isBurgerOpen;

  if (isBurgerOpen) {
    useIconBurger.setAttribute('href', `${ICONS_PATH}#close-button`);
  } else {
    useIconBurger.setAttribute('href', `${ICONS_PATH}#burger-open`);
  }
}

buttonBurger.addEventListener('click', openPopupMenu);
