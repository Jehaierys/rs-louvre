class GalleryAnimator {

    initialize() {
        this.#refreshPictureAnimationOnPageReload();
        this.prepare();
    }

    #refreshPictureAnimationOnPageReload() {
        document.addEventListener('load', () => {
            galleryAnimator.prepare();
        });
        window.addEventListener('resize', () => {
            galleryAnimator.prepare();
        });
    }

    prepare() {
        const pictures = this.#galleryPictures();
        this.#setObservers(pictures);
    }

    #galleryPictures() {
        return document.getElementById('gallery')
            .getElementsByClassName('picture');
    }

    #setObservers(pictures) {
        Array.from(pictures).map((picture) => {
            this.#makeObserver().observe(picture);
        });
    }

    #makeObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('gallery__picture-floating-up');
                    entry.target.classList.remove('gallery__picture-invisible')
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        return observer;
    }
}