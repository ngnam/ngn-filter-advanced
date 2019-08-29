import {
    trigger,
    style,
    animate,
    transition,
    AnimationTriggerMetadata
} from '@angular/animations';

export const fadeInOutAnimation: AnimationTriggerMetadata = trigger(
    'fadeInOut',
    [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('500ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate('500ms', style({ opacity: 0 }))
        ])
    ]
);
