class WelcomeArrowSwiper extends WelcomeSwiper {
    #currentPicture;
    #PICTURES;

    constructor(currentPicture, PICTURES) {
        super();
        this.#currentPicture = currentPicture;
        this.#PICTURES = PICTURES;
    }

    async swipeToRight() {
        this.disabler.disableSwiping();

        const current = this.#PICTURES[this.#currentPicture.index];
        const next = this.#nextPicture();

        this.tracker.updateMetadata(this.#currentPicture.index);

        current.classList.add('disappear-to-the-left');
        next.classList.remove('picture-inactive');
        next.classList.add('appear-from-the-right');

        await sleep(800);

        current.classList.add('picture-inactive');
        current.classList.remove('disappear-to-the-left');
        next.classList.remove('appear-from-the-right');
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
        this.disabler.disableSwiping();

        const current = this.#PICTURES[this.#currentPicture.index];
        const previous = this.#previousPicture();

        this.tracker.updateMetadata(this.#currentPicture.index);

        current.classList.add('disappear-to-the-right');
        previous.classList.remove('picture-inactive');
        previous.classList.add('appear-from-the-left');

        await sleep(800);

        current.classList.add('picture-inactive');
        current.classList.remove('disappear-to-the-right');
        previous.classList.remove('appear-from-the-left');
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
