import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-password-security',
  templateUrl: './password-security.component.html',
  styleUrls: ['./password-security.component.css']
})
export class PasswordSecurityComponent {
   passwordForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.passwordForm = this.fb.group(
      {
        currentPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    console.log('Form submit triggered!');
    if (this.passwordForm.valid) {
      console.log('✅ Password change submitted:', this.passwordForm.value);
      alert('Password changed successfully!');
      this.passwordForm.reset();
    } else {
      this.passwordForm.markAllAsTouched();
      console.warn('⚠️ Form invalid', this.passwordForm.errors);
    }
  }
}
