class VideoSwiper {
    #sliderSwitch;
    #disabler;
    #leftVideo;
    #rightVideo;
    #cycle;

    constructor(switcher, disabler, leftVideo, rightVideo) {
        this.#sliderSwitch = switcher;
        this.#disabler = disabler;
        this.#leftVideo = leftVideo;
        this.#rightVideo = rightVideo;
        this.#cycle = new VideoCycle();
    }

    swipeToLeft() {
        if (this.#isDisabled()) {
            return;
        }
        this.#disableSwiping();

        const appearingElement = this.#appearingLeft();
        const disappearingElement = this.#disappearingLeft();

        const script = AnimationScriptGathering.videoLeftAnimation(appearingElement, disappearingElement);
        this.#sliderSwitch.animateSwitching(script);
    }

    #isDisabled() {
        return this.#disabler.isWelcomeSliderDisabled();
    }

    #disableSwiping() {
        this.#disabler.disableWelcomeSwiping();
    }

    #appearingLeft() {
        if (this.#leftVideo.index === 0) {
            this.#leftVideo.index = 4;
        } else {
            this.#leftVideo.index++;
        }
        // todo
    }

    #disappearingLeft() {
        if (this.#rightVideo.index === 0) {
            this.#rightVideo.index = 4;
        } else {
            this.#rightVideo.index++;
        }
        // todo
    }
}