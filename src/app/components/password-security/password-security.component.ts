import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-security',
  templateUrl: './password-security.component.html',
  styleUrl: './password-security.component.css'
})
export class PasswordSecurityComponent {
 passwordForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async onSubmit() {
    if (this.passwordForm.invalid) return;

    const { newPassword, confirmPassword } = this.passwordForm.value;

    if (newPassword !== confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    this.isLoading = true;
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.isLoading = false;

    alert('Password updated successfully!');
    this.passwordForm.reset();
  }

}
