class VideoCycle {
    #videos;
    #leftVideoIndex;
    #rightVideoIndex;

    constructor() {
        this.#videos = Array.of(
            document.getElementById('first-video'),
            document.getElementById('second-video'),
            document.getElementById('third-video'),
            document.getElementById('fourth-video'),
            document.getElementById('fifth-video')
        );

        this.#leftVideoIndex = 0;
        this.#rightVideoIndex = 2;
    }

    right() {
        if (this.#rightVideoIndex === 4) {
            this.#rightVideoIndex = 0;
            return this.#videos[0];
        } else {
            return this.#videos[++this.#rightVideoIndex];
        }
    }

    left() {
        if (this.#leftVideoIndex === 0) {
            this.#leftVideoIndex = 4;
            return this.#videos[4];
        } else {
            return this.#videos[--this.#leftVideoIndex];
        }
    }

}