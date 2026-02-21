class VideoArranger {
    #currentLayout;
    #frames = document.getElementById('video')
        .getElementsByClassName('video__petite-container').item(0)
        .getElementsByClassName('video__petite-holder');

    arrange() {

        if (this.#currentLayout === window.currentScale) {
            return;
        }

        switch (window.currentScale) {
            case window.SCALE.PX_1920:
                this.#adapt(3);
                break;
            case window.SCALE.PX_1024:
                this.#adapt(3);
                break;
            case window.SCALE.PX_768:
                this.#adapt(2);
                break;
            case window.SCALE.PX_420:
                this.#adapt(2);
                break;
        }

        this.#report();
    }

    #adapt(visibleSimultaneously) {
        this.#activateVideos();
        setTimeout(() => {
            this.#hideSomeVideos(visibleSimultaneously);
        }, 200);
    }

    #activateVideos() {
        Array.from(this.#frames).map((frame) => {
            frame.classList.remove('inactive');
        });
    }

    #hideSomeVideos(visibleSimultaneously) {
        Array.from(this.#frames).slice(visibleSimultaneously).map((frame) => {
            frame.classList.add('inactive');
        });
    }

    #report() {
        this.#currentLayout = window.currentScale;
    }

    addWindowWidthAdapter() {
        window.addEventListener('resize', function () {
            videoDispatcher.arrange();
        });
    }
}