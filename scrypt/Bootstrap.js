window.SCALE = {PX_1920: 1920, PX_1024: 1024, PX_768: 768, PX_420: 420};
window.currentScale;

const videoDispatcher = new VideoDispatcher();
const welcomeSlider = new WelcomeSlider();
const galleryArranger = new GalleryArranger();
const galleryAnimator = new GalleryAnimator();

window.onYouTubeIframeAPIReady = videoDispatcher.onYouTubeIframeAPIReady.bind(videoDispatcher);

document.addEventListener('DOMContentLoaded', () => {
    NavigationMenuFacade.addScrollLimiter();
    NavigationMenuFacade.addNavButtonClickListeners();

    galleryArranger.initialize(); // initial window.currentScale setup
    galleryArranger.addWindowResizeListener();

    galleryAnimator.prepare();
    galleryAnimator.refreshPictureAnimationOnPageReload();

    welcomeSlider.initializeTouchSwiper();

    videoDispatcher.addWindowWidthAdapter();
    videoDispatcher.arrange();
});
