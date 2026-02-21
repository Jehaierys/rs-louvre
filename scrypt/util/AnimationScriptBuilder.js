class AnimationScriptBuilder {
    #building = new AnimationScript();

    static builder() {
        return new AnimationScriptBuilder();
    }

    appearingElement(element) {
        this.#building.appearingElement = element;
        return this;
    }

    shiftingElement(element) {
        this.#building.shiftingElement = element;
        return this;
    }

    disappearingElement(element) {
        this.#building.disappearingElement = element;
        return this;
    }

    disappearingAnimation(disappearingAnimation) {
        this.#building.disappearingAnimation = disappearingAnimation;
        return this;
    }

    shiftingAnimation(animation) {
        this.#building.shiftingAnimation = animation;
        return this;
    }

    deactivation(deactivation) {
        this.#building.deactivation = deactivation;
        return this;
    }

    appearingAnimation(appearingAnimation) {
        this.#building.appearingAnimation = appearingAnimation;
        return this;
    }

    build() {
        return this.#building;
    }
}