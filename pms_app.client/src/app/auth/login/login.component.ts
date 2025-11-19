import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent implements AfterViewInit {
  constructor(private router: Router) {}

  email = '';
  password = '';
  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ngAfterViewInit(): void {
    // Wait for Google script to load
    const checkGoogle = setInterval(() => {
      if (typeof google !== 'undefined' && google.accounts && google.accounts.oauth2) {
        clearInterval(checkGoogle);
        console.log("Google OAuth client loaded");
      }
    }, 300);
  }

  // 🔥 CUSTOM SIGN-IN HANDLER (KEEPS YOUR BUTTON INTACT)
  onGoogleSignIn(): void {
    const client = google.accounts.oauth2.initTokenClient({
      client_id: '994407893282-vrs5j6a34l7q6esp4lrm5qd36247qoua.apps.googleusercontent.com',
      scope: 'openid email profile',
      callback: (tokenResponse: any) => {
        if (tokenResponse?.access_token) {
          console.log("Google Access Token:", tokenResponse.access_token);

          // Fetch Google profile
          fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` }
          })
          .then(res => res.json())
          .then(profile => {
            console.log("Google User Profile:", profile);

            // Store user data
            localStorage.setItem('user', JSON.stringify(profile));

            // Navigate to your secure page
            this.router.navigate(['/app/owner-room']);
          });
        }
      }
    });

    // Opens Google popup
    client.requestAccessToken();
  }

 onContinue(): void {
  if (!this.email || !this.password) {
    console.log('Form is invalid');
    return;
  }

  console.log('Manual login clicked');
  console.log('Email:', this.email);
  console.log('Password:', this.password);

  // Navigate to the "app" route
  this.router.navigate(['/app']);
}



  onSignUp(): void {
    this.router.navigate(['auth/register']);
  }

  simulateLogin() {
    console.log('Simulated login clicked');
  }
}
