class Gallery {
    static SCALE = {PX_1920: 1920, PX_1024: 1024, PX_768: 768, PX_420: 420};
    static EXTENSION = '.webp';
    static #gallery = document.getElementById('gallery');
    static #container = this.#gallery.getElementsByClassName('container').item(0);
    static currentScale;
    static #SCHEMA = {
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

    static shufflePictures(scale) {
        this.#clearContainer();
        let schema;
        schema = this.#SCHEMA[scale.toString()].columns;
        for (let i = 0; i < schema.length; ++i) {
            const column = this.#createColumn(i);
            for (let j = 0; j < schema[i].length; ++j) {
                const frame = this.#createFrame();
                this.#assignPicture(frame, schema[i][j]);
                column.appendChild(frame);
                // alert('i = ' + i + '/ j = ' + j);
            }
            this.#container.appendChild(column);
        }
    }

    static #clearContainer() {
        this.#container.innerHTML = '';
    }

    static #createColumn(i) {
        const column = document.createElement('div');
        column.classList.add('column');
        if (i + 1 === 2) { // seeks for second column, because it must be always translated a bit up
            column.classList.add('upper');
        }
        return column;
    }

    static #createFrame() {
        const frame = document.createElement('div');
        frame.classList.add('frame');
        return frame;
    }

    static #assignPicture(frame, pictureName) {
        const img = document.createElement('img');
        img.setAttribute('alt', 'picture');
        let path = 'img/gallery/' + pictureName + this.EXTENSION;
        img.setAttribute('src', path);
        img.classList.add('picture');
        frame.appendChild(img);
    }

    static initialize() {
        const width = window.innerWidth;
        alert(width)
        if (width >= 1920) {
            this.currentScale = this.SCALE.PX_1920;
            Gallery.shufflePictures(Gallery.SCALE.PX_1920);
        } else if (width >= 1024) {
            this.currentScale = this.SCALE.PX_1024;
            Gallery.shufflePictures(Gallery.SCALE.PX_1024);
        } else if (width >= 768) {
            this.currentScale = this.SCALE.PX_768;
            Gallery.shufflePictures(Gallery.SCALE.PX_768);
        } else {
            this.currentScale = this.SCALE.PX_420;
            Gallery.shufflePictures(Gallery.SCALE.PX_420);
        }
    }

    static addWindowResizeListener() {
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            if (width >= 1920) {
                if (Gallery.currentScale !== Gallery.SCALE.PX_1920) {
                    Gallery.shufflePictures(Gallery.SCALE.PX_1920);
                }
            } else if (width < 1920 && width >= 1024) {
                if (Gallery.currentScale !== Gallery.SCALE.PX_1024) {
                    Gallery.shufflePictures(Gallery.SCALE.PX_1024);
                }
            } else if (width < 1024 && width >= 768) {
                if (Gallery.currentScale !== Gallery.SCALE.PX_768) {
                    Gallery.shufflePictures(Gallery.SCALE.PX_768);
                }
            } else {
                if (Gallery.currentScale !== Gallery.SCALE.PX_420) {
                    Gallery.shufflePictures(Gallery.SCALE.PX_420);
                }
            }
        });
    }
}
