class WelcomeTouchSwiper {

    static #maxDifToSwipe = 50;
    #touchStart = 0;
    #touchEnd = 0;

    initialize() {
        const welcome = document.getElementById('welcome');
        const pictureHolder = welcome.getElementsByClassName('picture-holder').item(0);

        pictureHolder.addEventListener('pointerdown', function (event) {
            welcomeSlider.touchStart(event.clientX);
            this.disabler.disableSwiping();
        }, {
            passive: true,
            capture: true
        });

        pictureHolder.addEventListener('pointerup', function (event) {
            welcomeSlider.touchEnd(event.clientX);
            this.disabler.disableSwiping();
        }, {
            passive: true,
            capture: true
        });

    }

    setStartX(startX) {
        this.#touchStart = startX;
    }

    setEndX(endX) {
        this.#touchEnd = endX;
    }

    evaluateAndAct() {
        if (Math.abs(this.#touchStart - this.#touchEnd) < WelcomeTouchSwiper.#maxDifToSwipe) {
            this.#touchStart = 0;
            this.#touchEnd = 0;
            return;
        }
        if (this.#shouldSwipeRight()) {
            welcomeSlider.swipeToRight().then();
        } else {
            welcomeSlider.swipeToLeft().then();
        }
    }

    #shouldSwipeRight() {
        return this.#touchStart - this.#touchEnd > 0;
    }
}