class WelcomePointSwiper extends WelcomeSwiper {
    #currentPicture;
    #PICTURES;

    constructor(currentPicture, PICTURES) {
        super();
        this.#currentPicture = currentPicture;
        this.#PICTURES = PICTURES;
    }

    async switchTo(position) {

        if (this.#isDisabled()) {
            return;
        }
        if (this.#isSame(position)) {
            return;
        }

        this.#refreshMetadata(position);
        this.disabler.disableSwiping();

        const appearing = this.#PICTURES[position];
        const disappearing = this.#PICTURES[this.#currentPicture.index];

        if (this.#isPrevious(position)) {
            await this.switcher.animateLeftSwitching(appearing, disappearing);
        } else {
            await this.switcher.animateRightSwitching(appearing, disappearing);
        }
        this.#currentPicture.index = position;
    }

    #isDisabled() {
        return this.disabler.isDisabled();
    }

    #isSame(position) {
        return position === this.#currentPicture.index;
    }

    #refreshMetadata(position) {
        this.tracker.updateMetadata(position);
    }

    #isPrevious(position) {
        return this.#currentPicture.index - position > 0;
    }
}