class WelcomeSliderDisabler {

    constructor(points) {
        this.#points = points;
    }

    #points;
    #arrows = document.getElementsByClassName('welcome-slider-io-swiper').item(0).children;

    disableSwiping() {
        const buttons = Array.from(this.#points).concat(Array.from(this.#arrows));
        buttons.map(e => e.disabled = true);

        setTimeout(() => {
            buttons.forEach(e => e.disabled = false);
        }, 800);
    }
}