class NavigationMenuFacade {
    static #opened = false;

    static switchMenuState() {
        const header = document.getElementsByTagName('header').item(0); // there is only 1 <header>
        const welcome = document.getElementById('welcome');

        if (this.#opened) {
            this.#closeMenu(header, welcome);
            this.#opened = false;
        } else {
            this.#openMenu(header, welcome);
            this.#opened = true;
        }
    }

    static #closeMenu(header, welcome) {
        header.classList.remove('menu-opened');
        welcome.classList.remove('menu-opened');
        header.classList.add('menu-closed');
        welcome.classList.add('menu-closed');
    }

    static #openMenu(header, welcome) {
        header.classList.remove('menu-closed');
        welcome.classList.remove('menu-closed');
        header.classList.add('menu-opened');
        welcome.classList.add('menu-opened');
    }
}
