class WelcomeTouchSwiper extends AbstractWelcomeSwiper {

    static #maxDifToSwipe = 50;
    #touchStart = 0;
    #touchEnd = 0;

    initialize() {
        const welcome = document.getElementById('welcome');
        const pictureHolder = welcome.getElementsByClassName('picture-holder').item(0);

        pictureHolder.addEventListener('pointerdown', function (event) {
            if (welcomeSlider.isDisabled()) {
                return;
            }
            welcomeSlider.touchStart(event.clientX);
        }, this.#options);

        pictureHolder.addEventListener('pointerup', function (event) {
            if (welcomeSlider.isDisabled()) {
                return;
            }
            welcomeSlider.touchEnd(event.clientX);
        }, this.#options);
    }

    #options = {
        passive: true,
        capture: true
    }

    setStartX(startX) {
        this.#touchStart = startX;
    }

    setEndX(endX) {
        this.#touchEnd = endX;
    }

    evaluateAndAct() {
        if (Math.abs(this.#touchStart - this.#touchEnd) < WelcomeTouchSwiper.#maxDifToSwipe) {
            this.#clear();
            return;
        }
        if (this.#shouldSwipeRight()) {
            welcomeSlider.swipeToRight();
        } else {
            welcomeSlider.swipeToLeft();
        }
    }

    #clear() {
        this.#touchStart = 0;
        this.#touchEnd = 0;
    }

    #shouldSwipeRight() {
        return this.#touchStart - this.#touchEnd > 0;
    }
}