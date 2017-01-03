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

export function SLIDE_PANEL_ANIMATION(): AnimationEntryMetadata {
    return trigger('slideInPanel', [
        state('in', style({
            height: "320px"
        })),
        transition('void => *', [
            style({ height: "0" }),
            animate(4000)
        ]),
        transition('* => void', [
            animate(100, style({ height: '0' }))
        ])
    ]);
}
