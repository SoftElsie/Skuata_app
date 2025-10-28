import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { FooterComponent } from "../../components/shared/core/footer/footer.component";

@Component({
  selector: 'app-Register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      province: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
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
      console.log('Form Submitted!', this.regForm.value);
      alert(`Registration successful for ${this.regForm.value.email} as a ${this.selectedRole}`);
      // Optionally reset form and role
      this.regForm.reset();
      this.selectedRole = '';
      this.showForm = false;
    } else {
      // Mark all fields as touched to show errors
      this.regForm.markAllAsTouched();
      this.showRoleError = !this.selectedRole; // Show role error if not selected
      alert('Please fill in all required fields correctly.');
    }
  }
}
