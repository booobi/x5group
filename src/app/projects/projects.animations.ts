import { animate, state, style, transition, trigger } from '@angular/animations';

export const projectsAnimations = [
    trigger('fadeState', [
        transition(':enter',[
            style({ opacity: 0 }),
            animate('1s', style({ opacity: 1})),
        ]),
    ]),
];
