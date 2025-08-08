class WelcomeArrowSwiper extends WelcomeSwiper {
    #currentPicture;
    #PICTURES;

    constructor(currentPicture, PICTURES) {
        super();
        this.#currentPicture = currentPicture;
        this.#PICTURES = PICTURES;
    }

    async swipeToRight() {
        if (this.#isDisabled()) {
            return;
        }
        this.disabler.disableWelcomeSwiping();

        const current = this.#PICTURES[this.#currentPicture.index];
        const next = this.#nextPicture();

        this.tracker.updateMetadata(this.#currentPicture.index);

        this.switcher.animateRightSwitching(next, current).then();
    }

    #isDisabled() {
        return this.disabler.isWelcomeSliderDisabled();
    }

    #nextPicture() {
        if (this.#currentPicture.index !== 4) {
            return this.#PICTURES[++this.#currentPicture.index];
        } else {
            this.#currentPicture.index = 0;
            return this.#PICTURES[0];
        }
    }

    async swipeToLeft() {
        if (this.#isDisabled()) {
            return;
        }
        this.disabler.disableWelcomeSwiping();

        const current = this.#PICTURES[this.#currentPicture.index];
        const previous = this.#previousPicture();

        this.tracker.updateMetadata(this.#currentPicture.index);

        this.switcher.animateLeftSwitching(previous, current).then();
    }

    #previousPicture() {
        if (this.#currentPicture.index !== 0) {
            return this.#PICTURES[--this.#currentPicture.index];
        } else {
            this.#currentPicture.index = 4;
            return this.#PICTURES[this.#currentPicture.index];
        }
    }
}
