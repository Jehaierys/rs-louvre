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
