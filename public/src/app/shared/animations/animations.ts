import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate,
    AnimationEntryMetadata
} from '@angular/core';


const SOLID: string = 'solid';
const TRANSPARENT: string = 'transparent';

export function toggleSlideState(currentState: string): string {
    return (currentState === SOLID ? TRANSPARENT : SOLID);
}

export function OPACITY_ANIMATION(): AnimationEntryMetadata {
    return trigger('changeOpacity', [
        state(SOLID, style({
            opacity: 1
        })),
        state(TRANSPARENT, style({
            opacity: 0.5
        })),
        transition(SOLID + '=>' + TRANSPARENT, animate('200ms ease-in')),
        transition(TRANSPARENT + '=>' + SOLID, animate('200ms ease-out'))
    ]);
}