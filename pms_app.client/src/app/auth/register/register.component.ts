import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  selectedRole: string = '';
  showRoleError: boolean = false;

  constructor(private router: Router) {}

  // Handle role selection
  selectRole(role: string) {
    this.selectedRole = role;
    this.showRoleError = false; // clear error when role selected
  }

  // Validate and navigate to RegisterFormComponent
  onSignUp() {
    if (!this.selectedRole) {
      this.showRoleError = true;
    } else {
      this.showRoleError = false;
      // Navigate to RegisterFormComponent with selected role
      this.router.navigate(['/auth/register-form'], {
        queryParams: { role: this.selectedRole }
      });
    }
  }
}
