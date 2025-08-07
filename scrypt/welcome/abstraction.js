class WelcomeSwiper {
    #points = document.getElementsByClassName('welcome-slider-io-pointer').item(0).children;

    tracker = new Tracker(this.#points);
    disabler = new WelcomeSliderDisabler(this.#points);
    switcher = new WelcomeSwitcher();
}