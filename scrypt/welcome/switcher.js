class WelcomeSwitcher {

    #animationDuration = 800;

    animateWelcomeSwitching(script) {
        const appearing = script.appearingElement;
        const disappearing = script.disappearingElement;

        const appearingAnimation = script.appearingAnimation;
        const deactivation = script.deactivation;
        const disappearingAnimation = script.disappearingAnimation;

        disappearing.classList.add(disappearingAnimation);
        appearing.classList.remove(deactivation);
        appearing.classList.add(appearingAnimation);

        setTimeout(() => {
            disappearing.classList.add(deactivation);
            disappearing.classList.remove(disappearingAnimation);
            appearing.classList.remove(appearingAnimation);
        }, this.#animationDuration);
    }
}