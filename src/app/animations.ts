import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeOutAnimation = trigger('fadeOut', [
    state('void', style({ opacity: 0 })),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('500ms ease-out', style({ opacity: 0 })),
    ]),
  ]);

  export const positionAnimation =  trigger('positionAnimation', [
    state('home', style({ transform: 'translateX(0)' })),
    state('lighting', style({ transform: 'translateX(-99%)' })),
    state('shades', style({ transform: 'translateX(-198%)' })),
    state('settings', style({ transform: 'translateX(-297%)' })),  
    transition('* => *', [
        animate('500ms ease-in-out')
      ])
  ]);