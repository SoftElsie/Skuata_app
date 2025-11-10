import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { FooterComponent } from "../../components/shared/core/footer/footer.component";
import { Router } from '@angular/router';

// Custom validator function
export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ 'passwordMismatch': true });
    return { 'passwordMismatch': true };
  } else {
    if (confirmPassword) {
      const errors = confirmPassword.errors;
      if (errors) {
        delete errors['passwordMismatch'];
        confirmPassword.setErrors(Object.keys(errors).length > 0 ? errors : null);
      }
    }
    return null;
  }
}

@Component({
  selector: 'app-Register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('slideInAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {
  selectedRole: string = '';
  showForm: boolean = false;
  showRoleError: boolean = false;
  regForm!: FormGroup;

  
  showPassword = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      province: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: passwordMatchValidator });
  }

  // Role selection
  selectRole(role: string) {
    this.selectedRole = role;
    this.showRoleError = false; // Hide error when a role is selected
  }

  // Show form only after role is selected
  onSignUp() {
    if (!this.selectedRole) {
      this.showRoleError = true;
    } else {
      this.showForm = true;
      this.showRoleError = false;
      console.log('showForm is now:', this.showForm);
    }
  }

  // Form submission with validation
  onSubmit() {
    if (this.regForm.valid && this.selectedRole) {
      this.isDissolving = true;
      setTimeout(() => {
        console.log('Form Submitted!', this.regForm.value);
        this.router.navigate(['/profile']);
      }, 300);
    } else {
      // Mark all fields as touched to show errors
      this.regForm.markAllAsTouched();
      this.showRoleError = !this.selectedRole; // Show role error if not selected
      alert('Please fill in all required fields correctly.');
    }
  }
}
