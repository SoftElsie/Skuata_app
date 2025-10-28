import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async googleSignIn() {
    try {
      const result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      // Redirect to dashboard after successful login
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  }

  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
}
