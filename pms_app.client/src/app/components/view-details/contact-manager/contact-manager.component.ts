import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-manager',
  standalone: false,
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent {
 showPhoneNumber = false;
 loading = false;
loadingButton: string | null = null;

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
  

handleSendMessage(): void {
  if (this.contactManagerForm.invalid || this.loading) return;

  this.loading = true;
  this.loadingButton = 'sendMessage';

  setTimeout(() => {
    console.log('✅ Sending message:', this.contactManagerForm.value);

    // TODO: replace with actual send logic, e.g.,
    // this.api.sendMessage(this.contactManagerForm.value).subscribe(...)

    this.loading = false;
    this.loadingButton = null;
  }, 500);
}



}
