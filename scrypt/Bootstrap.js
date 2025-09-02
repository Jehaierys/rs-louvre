window.SCALE = {PX_1920: 1920, PX_1024: 1024, PX_768: 768, PX_420: 420};
window.currentScale;

// const videoDispatcher = new VideoDispatcher();
welcomeSlider = new WelcomeSlider();
const galleryArranger = new GalleryArranger();
const galleryAnimator = new GalleryAnimator();

// window.onYouTubeIframeAPIReady = videoDispatcher.onYouTubeIframeAPIReady.bind(videoDispatcher);

document.addEventListener('DOMContentLoaded', () => {

    NavigationMenuFacade.initialize();
    galleryArranger.initialize();
    galleryAnimator.initialize();
    welcomeSlider.initialize();

    // videoDispatcher.addWindowWidthAdapter();
    // videoDispatcher.arrange();
});
