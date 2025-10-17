import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {

  resetPasswordForm!: FormGroup;
  submitted = false;
  submissionStatus: 'success' | 'error' | null = null;

  constructor(private form: FormBuilder) {
    this.resetPasswordForm = this.form.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  get email() {
    return this.resetPasswordForm.get('email')
  }

  onSubmit(){
    if(this.resetPasswordForm.valid) {
      console.log('Form Submitted!', this.resetPasswordForm.value);
      this.submissionStatus = 'success'

    }
  }

}
