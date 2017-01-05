import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import contactRoutes from './contact.routes';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, contactRoutes],
  declarations: [ContactComponent],
  exports: [ContactComponent],
  providers: []
})
export class ContactModule { }
