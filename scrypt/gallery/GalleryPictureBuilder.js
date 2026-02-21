class GalleryPictureBuilder {
    #painting = document.createElement('img');
    #frame = document.createElement('div');

    static builder() {
        return new GalleryPictureBuilder();
    }

    path(path) {
        this.#painting.setAttribute('src', path);
        return this;
    }

    build() {
        this.#frame.classList.add('frame');

        this.#painting.classList.add('picture');
        this.#painting.classList.add('gallery__picture-invisible');
        this.#painting.setAttribute('alt', 'picture');

        this.#frame.appendChild(this.#painting);
        return this.#frame;
    }
}