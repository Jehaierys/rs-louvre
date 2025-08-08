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
}