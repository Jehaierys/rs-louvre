class WelcomePointSwiper extends WelcomeSwiper {
    #currentPicture;
    #PICTURES;

    constructor(currentPicture, PICTURES) {
        super();
        this.#currentPicture = currentPicture;
        this.#PICTURES = PICTURES;
    }

    switchTo(position) {
        if (this.#invalid(position)) {
            return;
        }

        this.disableSwiping();
        this.#refreshMetadata(position);

        const appearing = this.#PICTURES[position];
        const disappearing = this.#PICTURES[this.#currentPicture.index];

        let script
        if (this.#isPrevious(position)) {
            script = AnimationScriptGathering.leftAnimationScript(appearing, disappearing);
        } else {
            script = AnimationScriptGathering.rightAnimationScript(appearing, disappearing);
        }

        this.switch(script);
        this.#currentPicture.index = position;
    }

    #invalid(position) {
        return this.#isSame(position) || this.isDisabled();
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