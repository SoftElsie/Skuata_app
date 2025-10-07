import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 onContinue() {
    console.log('Continue clicked');
  }

  onGoogleLogin() {
    console.log('Continue with Google clicked');
  }

  onSignUp() {
    console.log('Sign Up clicked');
  }
}
