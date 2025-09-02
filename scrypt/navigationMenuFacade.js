class NavigationMenuFacade {
    static #opened = false;

    static #header = document.getElementsByTagName('header').item(0); // there is only 1 <header>
    static #welcome = document.getElementById('welcome');
    static #footer = document.getElementsByTagName('footer').item(0);


    static initialize() {
        this.addScrollLimiter();
        this.addNavButtonClickListeners();
    }
    static switchMenuState() {
        if (this.#opened) {
            this.#closeMenu();
            this.#opened = false;
        } else {
            this.#openMenu();
            this.#opened = true;
        }
    }

    static #closeMenu() {
        this.#header.classList.remove('menu-opened-header');
        this.#welcome.classList.remove('menu-opened-welcome');
        this.#header.classList.add('menu-closed-header');
        this.#welcome.classList.add('menu-closed-welcome');
        this.#footer.classList.remove('menu-opened-footer');
        this.#footer.classList.add('menu-closed-footer');
    }

    static #openMenu() {
        this.#header.classList.remove('menu-closed-header');
        this.#welcome.classList.remove('menu-closed-welcome');
        this.#header.classList.add('menu-opened-header');
        this.#welcome.classList.add('menu-opened-welcome');
        this.#footer.classList.remove('menu-closed-footer');
        this.#footer.classList.add('menu-opened-footer');
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

    static addNavButtonClickListeners() {
        const nav = this.#header.getElementsByTagName('nav').item(0);
        const ul = nav.getElementsByTagName('ul').item(0);
        const listItems = ul.getElementsByTagName('li');

        for (let i = 0; i < listItems.length; ++i) {
            listItems[i].addEventListener('click', function(event) {
                NavigationMenuFacade.switchMenuState();
            });
        }
    }

    static menuOpened() {
        return this.#opened;
    }
}
