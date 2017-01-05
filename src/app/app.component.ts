import { Component, ViewEncapsulation, trigger, style, state, transition, keyframes, animate } from '@angular/core';
import './operators';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  selector: 'sd-app',
  animations: [
    trigger('pageLoad', [
      state('rotateRight', style({
        'transform': 'rotate(120deg)'
      })),
      state('center', style({
        'transform': 'rotate(0deg)'
      })),
      state('rotateLeft', style({
        'transform': 'rotate(-120deg)'
      })),
      transition('void => *', animate(2500, keyframes([
        style({ 'transform': 'scale(0) rotate(0deg)' }),
        style({ 'transform': 'scale(.2) rotate(80deg)' }),
        style({ 'transform': 'scale(.4) rotate(140deg))' }),
        style({ 'transform': 'scale(.7) rotate(190deg)' }),
        style({ 'transform': 'scale(.9) rotate(240deg)' }),
        style({ 'transform': 'scale(1.3) rotate(280deg)' }),
        style({ 'transform': 'scale(1) rotate(360deg)' })
      ]))),
      transition('* => *', animate('2s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
    ]),
     trigger('visibility', [
       state('shown', style({
            opacity: 1
        })),
        state('hidden', style({
            opacity: 0
        })),
        transition('* => *', animate('.5s ease-in'))
    ])
  ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  template: `
  <sd-toolbar></sd-toolbar>
  <sd-navbar></sd-navbar>
  <div id="banner">
    <img [@pageLoad]="loaded"  src="assets/img/tg-icon.png" alt="">
    <div [@visibility]="visibility" id="btn-row">
      <button (click)="onRotateLeft()">
      Fold Left
    </button>
     <button (click)="onCenter()">
    Back to center
    </button>
      <button (click)="onRotateRight()">
      Fold RIght
    </button>
  </div>
     <button *ngIf="'visibility === hidden'" type="button"
        class="btn btn-primary btn-lg"
        (click)="toggleButtons()">
     Rotate the logo 
    </button>
  </div>
  <router-outlet class="site-content"></router-outlet>
  <sd-footer></sd-footer>
  `
})

export class AppComponent {
  loaded: string = 'showLogo';
    visibility: string = 'hidden';
  onRotateLeft () {
    this.loaded = 'rotateLeft';
  }

  onRotateRight () {
    this.loaded = 'rotateRight';
  }


  onCenter () {
    this.loaded = 'center';
  }
toggleButtons() {
    this.visibility =
        this.visibility == 'shown'
        ? 'hidden' : 'shown';
  }
}
