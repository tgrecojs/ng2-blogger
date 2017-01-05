import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sd-footer',
    styleUrls: ['footer.component.css'],
    templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
   logoImg = '/assets/tg-logo.png';

    ngOnInit() {
        console.log('This footer has arrived!');
    }
}
