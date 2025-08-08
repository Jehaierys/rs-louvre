class WelcomeSwiper {
    #points = document.getElementsByClassName('welcome-slider-io-pointer').item(0).children;

    tracker = new Tracker(this.#points);
    disabler = new SliderSwipingDisablerVisitor(this.#points);
    switcher = new WelcomeSwitcher();
}