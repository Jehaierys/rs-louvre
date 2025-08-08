function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Tracker {

    #points;
    constructor(points) {
        this.#points = points;
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
        Array.from(this.#points).map(point => point.classList.remove('welcome-slider-io-point-active'));
        this.#points.item(position).classList.add('welcome-slider-io-point-active');
    }
}