import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
 email: string = '';

  onContinue(): void {
    console.log('Continue button clicked with email:', this.email);
  }

  onGoogleSignIn(): void {
    console.log('Continue with Google clicked');
  }

  onSignUp(): void {
    console.log('Sign Up button clicked');
  }
}
