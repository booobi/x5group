import { animate, state, style, transition, trigger } from '@angular/animations';

export const projectsAnimations = [
    trigger('fadeState', [
        state('void', style({
            opacity: 0,
        })),
        state('in', style({
            opacity: 1,
        })),
        transition('void => in', [
            animate('1s')
        ]),
    ]),
];
