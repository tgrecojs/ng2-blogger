import { Component,  } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import '../operators';

@Component({
    selector: 'contact-me',
    styleUrls: ['./contact.component.css'],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    formView = true;
    isSubmitted = false;
    contactForm: FormGroup;
    name: AbstractControl;
    email: AbstractControl;
    reason: AbstractControl;
    phoneNumber: AbstractControl;
    message: AbstractControl;


    reasons = [
        'Graphic Design',
        'Web and Mobile Development',
        'Teaching and Education',
        'Just Saying Hello'
        ];

    entries:any;
    constructor(private af: AngularFire, fb: FormBuilder) {
    this.entries = af.database.list('/entries');
    // Formbuild for validations
    // Validators are just plain functions!
    this.contactForm = fb.group({
        'name': ['', Validators.required],
        'email':['', Validators.required],
        'reason': [''],
        'phoneNumber': ['', Validators.required],
        'message': ['', Validators.minLength(30)]
});
this.name = this.contactForm.controls['name'];
this.email = this.contactForm.controls['email'];
this.reason = this.contactForm.controls['reason'];
this.phoneNumber = this.contactForm.controls['phoneNumber'];
this.message = this.contactForm.controls['message'];

  }

    onSubmit(formValue: Object) {
        console.log(formValue);
        this.entries.push(formValue);
        this.isSubmitted = true;
        this.formView = false;
    }

}
