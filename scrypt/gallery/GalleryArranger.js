class GalleryArranger {
    #EXTENSION = '.webp';
    #gallery = document.getElementById('gallery');
    #container = this.#gallery.getElementsByClassName('container').item(0);
    #SCHEMA = {
        '1920': {
            columns: [
                ['archer-and-deer', 'venus', 'angel', 'in-the-field'],
                ['couple', 'stairs', 'man', 'handles'],
                ['putin', 'roof', 'outside', 'party']
            ]
        },
        '1024': {
            columns: [
                ['couple', 'archer-and-deer', 'viva-la-vida', 'handles'],
                ['putin', 'stairs', 'naked', 'olga'],
                ['party', 'man', 'angel', 'in-the-field']
            ]
        },
        '768': {
            columns: [
                ['angel', 'joconda', 'viva-la-vida'],
                ['naked', 'party', 'venus', 'roof']
            ]
        },
        '420': {
            columns: [
                ['joconda', 'handles', 'olga'],
                ['venus', 'roof', 'party', 'stairs']
            ]
        }
    };

    shufflePictures(scale) {
        this.#clearContainer();
        let schema;
        schema = this.#SCHEMA[scale.toString()].columns;
        for (let i = 0; i < schema.length; ++i) {
            const column = this.#createColumn(i);
            for (let j = 0; j < schema[i].length; ++j) {
                const name = schema[i][j];
                const picture = this.#createPicture(name);
                column.appendChild(picture);
            }
            this.#container.appendChild(column);
        }
    }

    #createPicture(name) {
        return GalleryPictureBuilder
            .builder()
            .path('img/gallery/' + name + this.#EXTENSION)
            .build();
    }

    #clearContainer() {
        this.#container.innerHTML = '';
    }

    #createColumn(i) {
        const column = document.createElement('div');
        column.classList.add('column');
        if (i + 1 === 2) { // seeks for second column, because it must be always translated a bit up
            column.classList.add('upper');
        }
        return column;
    }

    initialize() {
        const width = window.innerWidth;
        if (width >= 1920) {
            window.currentScale = SCALE.PX_1920;
            this.shufflePictures(SCALE.PX_1920);
        } else if (width >= 1024) {
            window.currentScale = SCALE.PX_1024;
            this.shufflePictures(SCALE.PX_1024);
        } else if (width >= 768) {
            window.currentScale = SCALE.PX_768;
            this.shufflePictures(SCALE.PX_768);
        } else {
            window.currentScale = SCALE.PX_420;
            this.shufflePictures(SCALE.PX_420);
        }
    }

    addWindowResizeListener() {
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            if (width >= 1920) {
                if (window.currentScale !== SCALE.PX_1920) {
                    window.currentScale = SCALE.PX_1920;
                    galleryArranger.shufflePictures(SCALE.PX_1920);
                }
            } else if (width < 1920 && width >= 1024) {
                if (window.currentScale !== SCALE.PX_1024) {
                    window.currentScale = SCALE.PX_1024;
                    galleryArranger.shufflePictures(SCALE.PX_1024);
                }
            } else if (width < 1024 && width >= 768) {
                if (window.currentScale !== SCALE.PX_768) {
                    window.currentScale = SCALE.PX_768;
                    galleryArranger.shufflePictures(SCALE.PX_768);
                }
            } else {
                if (window.currentScale !== SCALE.PX_420) {
                    window.currentScale = SCALE.PX_420;
                    galleryArranger.shufflePictures(SCALE.PX_420);
                }
            }
        });
    }
}
