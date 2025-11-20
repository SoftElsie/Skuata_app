import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  constructor(private router: Router) {}

  feedback = {
    email: ''
  }

  submitted = false;

  onSubmit(form: any){
    console.log('Form valid:', form.valid); // Debugging line
    if(!form.valid) return;
    console.log('Form Submitted!', this.feedback);
    this.submitted = true;
    this.router.navigate(['/auth/check-inbox']);
  }

  goBackToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
