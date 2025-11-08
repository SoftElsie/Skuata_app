import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  feedback = {
    email: ''
  }

  submitted = false;

  onSubmit(form: any){
    if(!form.valid) return;
    console.log('Form Submitted!', this.feedback);
    this.submitted = true;
  }

}
