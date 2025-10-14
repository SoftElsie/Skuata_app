import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrl: './contact-manager.component.css'
})
export class ContactManagerComponent {
  showPhoneNumber = false;

  contactManagerForm!: FormGroup;
  submitted = false;
  submissionStatus: 'success' | 'error' | null = null;

  constructor(private form: FormBuilder) {
    this.contactManagerForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber:['', [Validators.required, Validators.maxLength(10)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]]
    })
  }

  get name() {
    return this.contactManagerForm.get('name')
  }
  get email() {
    return this.contactManagerForm.get('email')
  }
  get phoneNumber() {
    return this.contactManagerForm.get('phoneNumber')
  }
  get message() {
    return this.contactManagerForm.get('message')
  }

  onSubmit(){
    if(this.contactManagerForm.valid){
      console.log('Message has been sent successfully!', this.contactManagerForm.value);
      this.submissionStatus = 'success'
    }

  }

  seePhoneNumber() {
    if(!this.showPhoneNumber){
      this.showPhoneNumber = true
    } else {
      this.showPhoneNumber = false
    }
    console.log(this.showPhoneNumber)
  }

  clearFields (){

  }

}
