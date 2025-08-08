class WelcomeArrowSwiper extends WelcomeSwiper {
    #currentPicture;
    #PICTURES;

    constructor(currentPicture, PICTURES) {
        super();
        this.#currentPicture = currentPicture;
        this.#PICTURES = PICTURES;
    }

    swipeToRight() {
        if (this.isDisabled()) {
            return;
        }
        this.disableSwiping();

        const current = this.#PICTURES[this.#currentPicture.index];
        const next = this.#nextPicture();

        const script = AnimationScriptGathering.rightAnimationScript(next, current);

        this.track(this.#currentPicture.index);

        this.switch(script);
    }

    #nextPicture() {
        if (this.#currentPicture.index !== 4) {
            return this.#PICTURES[++this.#currentPicture.index];
        } else {
            this.#currentPicture.index = 0;
            return this.#PICTURES[0];
        }
    }

    swipeToLeft() {
        if (this.isDisabled()) {
            return;
        }
        this.disableSwiping();

        const current = this.#PICTURES[this.#currentPicture.index];
        const previous = this.#previousPicture();

        this.track(this.#currentPicture.index);

        const script = AnimationScriptGathering.leftAnimationScript(previous, current);
        this.switch(script);
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
