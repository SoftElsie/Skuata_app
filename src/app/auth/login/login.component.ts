import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  onContinue(): void {
    console.log('Continue button clicked');
  }

  onGoogleSignIn(): void {
    console.log('Continue with Google clicked');
  }

  onSignUp(): void {
    console.log('Sign Up button clicked');
  }
}
