class WelcomeSlider {

    #currentPicture = { index: 0 };
    #PICTURES = [
        document.getElementById('first-slider-picture'),
        document.getElementById('second-slider-picture'),
        document.getElementById('third-slider-picture'),
        document.getElementById('fourth-slider-picture'),
        document.getElementById('fifth-slider-picture')
    ];

    #arrowSwiper = new WelcomeArrowSwiper(this.#currentPicture, this.#PICTURES);
    #pointSwiper = new WelcomePointSwiper(this.#currentPicture, this.#PICTURES);
    #touchSwiper = new WelcomeTouchSwiper();

    swipeToRight() {
        this.#arrowSwiper.swipeToRight();
    }

    swipeToLeft() {
        this.#arrowSwiper.swipeToLeft();
    }

    switchTo(position) {
        this.#pointSwiper.switchTo(position);
    }

    initialize() {
        this.#touchSwiper.initialize();
    }

    touchStart(startX) {
        this.#touchSwiper.setStartX(startX);
    }

    touchEnd(endX) {
        this.#touchSwiper.setEndX(endX);
        this.#touchSwiper.evaluateAndAct();
    }

    isDisabled() {
        return this.#arrowSwiper.isDisabled();
    }
}