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
    transition('settings => home', [
    animate('1500ms ease-in-out')
    ]),
    transition('settings => lighting', [
    animate('1000ms ease-in-out')
    ]),
    transition('home => settings', [
    animate('1500ms ease-in-out')
    ]),
    transition('home => shades', [
        animate('1000ms ease-in-out')
    ]),
    transition('shades => home', [
        animate('1000ms ease-in-out')
    ]),
    transition('lighting => settings', [
        animate('1000ms ease-in-out')
    ]),
    transition('* => *', [
        animate('500ms ease-in-out')
      ])
  ]);
