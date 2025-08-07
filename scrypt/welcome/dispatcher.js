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

    async swipeToRight() {
        await this.#arrowSwiper.swipeToRight();
    }

    async swipeToLeft() {
        await this.#arrowSwiper.swipeToLeft();
    }

    async switchTo(position) {
        await this.#pointSwiper.switchTo(position);
    }

    initializeTouchSwiper() {
        this.#touchSwiper.initialize();
    }

    touchStart(startX) {
        this.#touchSwiper.setStartX(startX);
    }

    touchEnd(endX) {
        this.#touchSwiper.setEndX(endX);
        this.#touchSwiper.evaluateAndAct();
    }
}