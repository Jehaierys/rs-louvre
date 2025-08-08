class WelcomeSwiper {
    #points = document.getElementsByClassName('welcome-slider-io-pointer').item(0).children;

    tracker = new Tracker(this.#points);
    disabler = new SliderSwipingDisablerVisitor();
    switcher = new WelcomeSwitcher();

    disableSwiping() {
        this.disabler.disableWelcomeSwiping();
    }

    isDisabled() {
        return this.disabler.isWelcomeSliderDisabled();
    }

    switch(scrypt) {
        this.switcher.animateWelcomeSwitching(scrypt);
    }
}