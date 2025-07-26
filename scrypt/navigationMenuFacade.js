class NavigationMenuFacade {
    static #opened = false;

    static switchMenuState() {
        const header = document.getElementsByTagName('header').item(0); // there is only 1 <header>
        const welcome = document.getElementById('welcome');
        const footer = document.getElementsByTagName('footer').item(0);

        if (this.#opened) {
            this.#closeMenu(header, welcome, footer);
            this.#opened = false;
        } else {
            this.#openMenu(header, welcome, footer);
            this.#opened = true;
        }
    }

    static #closeMenu(header, welcome, footer) {
        header.classList.remove('menu-opened-header');
        welcome.classList.remove('menu-opened-welcome');
        header.classList.add('menu-closed-header');
        welcome.classList.add('menu-closed-welcome');
        footer.classList.remove('menu-opened-footer');
        footer.classList.add('menu-closed-footer');
    }

    static #openMenu(header, welcome, footer) {
        header.classList.remove('menu-closed-header');
        welcome.classList.remove('menu-closed-welcome');
        header.classList.add('menu-opened-header');
        welcome.classList.add('menu-opened-welcome');
        footer.classList.remove('menu-closed-footer');
        footer.classList.add('menu-opened-footer');
    }

    static addScrollLimiter() {
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 767 && window.innerWidth < 1024) {
                if (NavigationMenuFacade.menuOpened()) {
                    let height = window.innerHeight;
                    let availableVerticalScroll = (971 - height) > 0 ? 917 - height + 50 : 0;
                    if (window.scrollY > availableVerticalScroll) {
                        window.scrollTo(0, availableVerticalScroll);
                        return;
                    }
                }
            }
            if (window.innerWidth > 419 && window.innerWidth < 767) {
                if (NavigationMenuFacade.menuOpened()) {
                    let height = window.innerHeight;
                    let availableVerticalScroll = (634 - height) > 0 ? 634 - height + 30 : 0;
                    if (window.scrollY > availableVerticalScroll) {
                        window.scrollTo(0, availableVerticalScroll);
                    }
                }
            }
        });
    }
    static menuOpened() {
        return this.#opened;
    }
}
