import { Component } from '@angular/core';

@Component({
    selector: 'sd-not-found',
    styles: [`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                }
              * {
                font-weight: 600;
                }
    `],
    template: `
        <h2>Page not found!</h2>
        <iframe src="//giphy.com/embed/xT1XGWbE0XiBDX2T8Q" width="480" 
        height="270" frameBorder="0"></iframe>
        <p>Looks like you've navigated to an incorrect route. 
        Try clicking one of the links above.</p>
    `
})

export class PageNotFoundComponent {
}