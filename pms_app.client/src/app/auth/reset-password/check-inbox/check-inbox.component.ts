import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-inbox',
  standalone: false,
  templateUrl: './check-inbox.component.html',
  styleUrl: './check-inbox.component.css'
})
export class CheckInboxComponent {
  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
