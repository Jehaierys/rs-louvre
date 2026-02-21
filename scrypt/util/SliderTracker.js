class SliderTracker {

    #welcomePoints;
    constructor(welcomePoints) {
        this.#welcomePoints = welcomePoints;
    }

    #ordinalHolder = document.getElementById('welcome-slider-current-picture');

    updateMetadata(position) {
        this.#updateOrdinal(position);
        this.#repaintPoints(position);
    }

    #updateOrdinal(position) {
        ++position;
        this.#ordinalHolder.innerHTML = '0' + position;
    }

    #repaintPoints(position) {
        Array.from(this.#welcomePoints).map(point => point.classList.remove('welcome-slider-io-point-active'));
        this.#welcomePoints.item(position).classList.add('welcome-slider-io-point-active');
    }

    updateVideoPointer() {

    }
}