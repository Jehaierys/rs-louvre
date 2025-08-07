class WelcomeSliderDisabler {

    #isDisabled = false;

    constructor(points) {
        this.#points = points;
    }

    #points;
    #arrows = document.getElementsByClassName('welcome-slider-io-swiper').item(0).children;

    isDisabled() {
        return this.#isDisabled;
    }
    disableSwiping() {
        this.#isDisabled = true;
        const buttons = Array.from(this.#points).concat(Array.from(this.#arrows));
        buttons.map(e => e.disabled = true);

        setTimeout(() => {
            buttons.forEach(e => e.disabled = false);
        }, 800);

        setTimeout(() => {
            this.#isDisabled = false;
        }, 800);
    }
}