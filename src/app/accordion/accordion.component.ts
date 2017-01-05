import { Component, trigger, style, state, transition, animate, keyframes } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'sd-accordion',
    animations: [
        trigger('accordion', [
            state('open', style({
                  height: 'auto'
            }))
        ]),
        trigger('signal', [
            state('go', style({
                'background-color':'green',
                'height':'500px',
                'border': '2px solid black',
                'border-radius' : '3px'
            })),
            state('stop', style({
                'background-color':'red',
                'height':'600px'
            })),
            state('three', style({
                'background-color':'blue',
                'height':'550px',
                'border': '2px dashed #00fd22',
                'border-radius': '30px'
            })),
            transition('* => *', animate('.5s ease-in'))
        ])
    ],
    styleUrls: ['accordion.component.css'],
    template: `
<div id="am-wrapper">
<div id="am-sidebar"> 
<button (click)="onGoClick()">About Me</button>
<button (click)="onStopClick()">Football</button>
<button (click)="onClickThree()">Friends and Family</button>
</div>
<div [@signal]="signal" id="am-content">
<div class="am-text">
    <h2> {{ heading }}</h2>
   <p> {{ message }}  </p>
   <img [src]="img" />
</div>
</div>
    `
})
export class AccordionComponent {
    signal = 'go';
    heading : string = 'About Thomas Greco';
    message: string = 'This is open!';
    img : string;
    bioData: Observable<any>;
    about: FirebaseListObservable<any>;

    constructor(private af: AngularFire) {
            this.bioData = af.database.list('/web-data');
            console.log(this.bioData);
            this.about = af.database.list('/web-data/about');
            console.log(this.about);
    }

    onGoClick(){
        this.signal = 'go';
        this.heading = 'Friends and Family';
        this.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis dolores itaque, molestiae iusto maiores neque eveniet minima soluta tempore repudiandae fugiat assumenda expedita maxime facere totam corporis excepturi suscipit. Dignissimos.'
        this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dallas_Cowboys_old_logo.svg/2000px-Dallas_Cowboys_old_logo.svg.png'
    }

    onStopClick() {
        this.signal = 'stop';
                this.heading = 'Friends and Family';
         this.message = `It was through NYCShowguide that I realized I had an affinity for programming. It was deemed a viable internship at Fordham, granted that I completed a term paper on the knew insights I had learned throughout the semester. To kick start the semester, I enrolled in a discounted web developer's certification course on Udemy.com. If nothing else, the certification would show that I had dedicated hours towards attaining new knowlegde durng the semester. That being said, I quickly knew that I had tapped into subject matter that I found incredibly interesting. Better yet, I knew that I had found something I was good at! After assessing my past success in graphic design and social media, I wondered why it took so long for me to find programming!`;
         this.img = 'http://www.carlabraham.com/Scranton%20pa%207.jpg';
    }

    onClickThree() {
        this.signal = 'three';
        this.heading = 'Friends and Family';
        this.message = `
        When I am not logging hours on the computer I like to spend time doing all sorts of fun things! I was born and raised in Scranton, PA. Scranton is a unique place. It's filled with large families, so, I, along with my four older siblings, had no shortage of friends growing up. Many of the same people who I ran around (and sometimes terrorized) my neighborhood with are still among my closest friends today and this is something that I believe to be extremely special. 
        `;
        this.img = 'https://udemy-images.udemy.com/course/750x422/500628_a962.jpg';
    }

}