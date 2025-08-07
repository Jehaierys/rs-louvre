const welcomeSlider = new WelcomeSlider();
const galleryAnimator = new GalleryAnimator();

document.addEventListener('DOMContentLoaded', () => {
    NavigationMenuFacade.addScrollLimiter();
    NavigationMenuFacade.addNavButtonClickListeners();
    Gallery.initialize();
    Gallery.addWindowResizeListener();
    galleryAnimator.prepare();
    galleryAnimator.refreshPictureAnimationOnPageReload();
    welcomeSlider.initializeTouchSwiper();
});
