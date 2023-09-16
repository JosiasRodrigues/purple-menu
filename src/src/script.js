const toggleMenu = () => {
    const burgerMenu = document.querySelector(".menu_icon");
    const src = burgerMenu.getAttribute('src');
    const iconName = src.includes('burger-menu.svg') ? 'close.svg' : 'burger-menu.svg';

    burgerMenu.setAttribute('src', iconName);

    const navigation = document.querySelector('.navigation');

    navigation.classList.toggle('navigation--mobile');
};
