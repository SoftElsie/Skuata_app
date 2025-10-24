import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // ✅ When Continue is clicked
  onContinue(): void {
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      // ✅ Navigate to dashboard page
      this.router.navigate(['/dash']);
    } else {
      console.warn('Please fill in both fields');
    }
  }

  // ✅ Google Sign-In
  onGoogleSignIn(): void {
    console.log('Google Sign-In clicked');
    // 🔧 Later integrate Firebase or Google OAuth here
  }

  // ✅ Navigate to Sign-Up page
  onSignUp(): void {
    console.log('Navigate to Sign-Up page');
    this.router.navigate(['/register']);
  }
}
