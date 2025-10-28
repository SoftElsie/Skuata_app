import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { inject } from '@angular/core';
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

  private auth: Auth = inject(Auth);

  constructor(private router: Router) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onContinue(): void {
    if (this.email && this.password) {
      console.log('Logging in with email:', this.email);
      this.router.navigate(['/dash']);
    }
  }

  async signInWithPopup() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'  // 
  });

  try {
    const result = await signInWithPopup(this.auth, provider);
    const user = result.user;
    console.log('✅ Google user:', user.displayName, user.email);
    this.router.navigate(['/dash']);
  } catch (error) {
    console.error('❌ Google Sign-In error:', error);
    alert('Google Sign-In failed. Please try again.');
  }
}

  onSignUp(): void {
    this.router.navigate(['/register']);
  }
}