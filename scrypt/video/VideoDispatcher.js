class VideoDispatcher {
    #players = new Array(5);
    #leftVideo = { index: 0 };
    #rightVideo = { index: 2 }; // todo
    #bottomVideos = document.getElementsByClassName('video__petite-holder');

    #disabler = new SliderSwipingDisablerVisitor(); // not a singleton
    #sliderSwitch = new SliderSwitch(); // still not a singleton
    #videoSwiper = new  VideoSwiper(
        this.#sliderSwitch,
        this.#disabler,
        this.#leftVideo,
        this.#rightVideo,
        this.#bottomVideos
    );
    #videoLoader = new VideoLoader(this.#players);
    #videoArranger = new VideoArranger();

    onYouTubeIframeAPIReady() {
        this.#videoLoader.onYouTubeIframeAPIReady();
    }

    swipeToLeft() {
        this.#videoSwiper.swipeToLeft();
    }

    swipeToRight() {
        // this.#videoSwiper.swipeToRight();
    }

    arrange() {
        this.#videoArranger.arrange();
    }

    addWindowWidthAdapter() {
        this.#videoArranger.addWindowWidthAdapter();
    }

    pauseAllExcept(one) {
        this.#players
            .filter(player => player !== one)
            .map((player) => {
                player.pauseVideo();
            });
    }

    initialize() {

    }
}