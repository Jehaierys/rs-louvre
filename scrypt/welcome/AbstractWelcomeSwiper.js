class AbstractWelcomeSwiper {
    #points = document.getElementsByClassName('welcome-slider-io-pointer').item(0).children;

    #tracker = new SliderTracker(this.#points);
    #disabler = new SliderSwipingDisablerVisitor();
    #switcher = new SliderSwitch();

    disableSwiping() {
        this.#disabler.disableWelcomeSwiping();
    }

    isDisabled() {
        return this.#disabler.isWelcomeSliderDisabled();
    }

    switch(scrypt) {
        this.#switcher.animateSwitching(scrypt);
    }

    track(position) {
        this.#tracker.updateMetadata(position);
    }
}