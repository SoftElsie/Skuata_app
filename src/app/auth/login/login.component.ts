import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
email = '';
  password = '';
  showPassword = false;

  // Toggle show/hide password visibility
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Called when user submits form
  onContinue(): void {
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // 🔐 TODO: Add authentication logic
    } else {
      console.warn('Please fill in both fields');
    }
  }

  // Google Sign-In handler
  onGoogleSignIn(): void {
    console.log('Google Sign-In clicked');
    // 🌐 TODO: Integrate Google Auth
  }

  // Navigation to Sign-Up
  onSignUp(): void {
    console.log('Navigate to Sign-Up page');
    // 🧭 TODO: Add navigation logic
  }
}
