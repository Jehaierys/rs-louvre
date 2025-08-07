const welcomeSlider = new WelcomeSlider();

document.addEventListener('DOMContentLoaded', () => {
    NavigationMenuFacade.addScrollLimiter();
    NavigationMenuFacade.addNavButtonClickListeners();
    Gallery.initialize();
    Gallery.addWindowResizeListener();
    welcomeSlider.initializeTouchSwiper();
});
