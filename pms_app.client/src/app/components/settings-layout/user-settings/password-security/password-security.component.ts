import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-password-security',
  standalone: false,
  templateUrl: './password-security.component.html',
  styleUrls: []
})
export class PasswordSecurityComponent {
  passwordForm!: FormGroup;
  loading = false;
  loadingButton = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.passwordForm = this.fb.group(
      {
        currentPassword: ['', [Validators.required]],
        newPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
          ]
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: PasswordSecurityComponent.passwordMatchValidator }
    );
  }

  get f() {
    return this.passwordForm.controls;
  }

  static passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  onSubmit = () => {
  if (this.passwordForm.valid) {
    console.log(' Form submitted successfully');
    console.log('Entered values:', {
      currentPassword: this.passwordForm.get('currentPassword')?.value,
      newPassword: this.passwordForm.get('newPassword')?.value,
      confirmPassword: this.passwordForm.get('confirmPassword')?.value
    });

    alert('Password changed successfully!');
    this.passwordForm.reset();
  } else {
    console.warn('⚠️ Invalid form submission');
    console.log('Form errors:', this.passwordForm.errors);
    this.passwordForm.markAllAsTouched();
    alert('Please fix the errors before submitting.');
  }
}
}
