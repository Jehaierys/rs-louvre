class WelcomeSwitcher {
    async animateLeftSwitching(appearing, disappearing) {
        disappearing.classList.add('disappear-to-the-right');
        appearing.classList.remove('picture-inactive');
        appearing.classList.add('appear-from-the-left');

        await sleep(800);

        disappearing.classList.add('picture-inactive');
        disappearing.classList.remove('disappear-to-the-right');
        appearing.classList.remove('appear-from-the-left');
    }

    async animateRightSwitching(appearing, disappearing) {
        disappearing.classList.add('disappear-to-the-left');
        appearing.classList.remove('picture-inactive');
        appearing.classList.add('appear-from-the-right');

        await sleep(800);

        disappearing.classList.add('picture-inactive');
        disappearing.classList.remove('disappear-to-the-left');
        appearing.classList.remove('appear-from-the-right');
    }
}