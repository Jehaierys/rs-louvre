class SliderSwipingDisablerVisitor {

    #isWelcomeSliderDisabled = false;
    #isVideoSliderDisabled = false;

    isWelcomeSliderDisabled() {
        return this.#isWelcomeSliderDisabled;
    }

    disableWelcomeSwiping() {
        this.#isWelcomeSliderDisabled = true;

        setTimeout(() => {
            this.#isWelcomeSliderDisabled = false;
        }, 800);
    }

    isVideoSliderDisabled() {
        return this.#isVideoSliderDisabled;
    }

    disableVideoSliderSwiping() {
        this.#isVideoSliderDisabled = true;

        setTimeout(() => {
            this.#isVideoSliderDisabled = false;
        }, 800);
    }
}