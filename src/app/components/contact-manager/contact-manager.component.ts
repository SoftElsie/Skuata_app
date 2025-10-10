import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrl: './contact-manager.component.css'
})
export class ContactManagerComponent {
  showPhoneNumber = false;
  feedback = {
    name: '',
    email: '',
    phoneNumber: '',
    message:''
  }

  submitted = false;

  onSubmit(form: any){
    if(!form.valid) return;
    console.log('Message has been sent successfully!', this.feedback);
    this.submitted = true
  }

  seePhoneNumber() {
    if(!this.showPhoneNumber){
      this.showPhoneNumber = true
    } else {
      this.showPhoneNumber = false
    }
    console.log(this.showPhoneNumber)
  }
}
