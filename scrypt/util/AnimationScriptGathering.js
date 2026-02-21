class AnimationScriptGathering {
    static rightAnimationScript(appearingElement, disappearingElement) {
        return AnimationScriptBuilder
            .builder()
            .appearingElement(appearingElement)
            .disappearingElement(disappearingElement)
            .appearingAnimation('appear-from-the-right')
            .deactivation('picture-inactive')
            .disappearingAnimation('disappear-to-the-left')
            .build();
    }

    static leftAnimationScript(appearingElement, disappearingElement) {
        return AnimationScriptBuilder
            .builder()
            .appearingElement(appearingElement)
            .disappearingElement(disappearingElement)
            .appearingAnimation('appear-from-the-left')
            .deactivation('picture-inactive')
            .disappearingAnimation('disappear-to-the-right')
            .build();
    }

    static videoLeftAnimation(appearingElement, disappearingElement) {
        return AnimationScriptBuilder
            .builder()
            .appearingElement(appearingElement)
            .disappearingElement(disappearingElement)
            .deactivation('inactive')
            .disappearingAnimation('video__disappear-left') // todo
            .appearingAnimation('video__appear-left') // todo
            .build();
    }
}