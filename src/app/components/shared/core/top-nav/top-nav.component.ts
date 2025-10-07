import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule,RouterModule,  NgIf],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit {
  // constructor(private router: Router,notificationService: NotificationServicet) {}
  constructor(private router:Router){}
  isLoggedIn = true;
  isMenuOpen = false;
  isProfileOpen = false;
  userName = 'John Doe'; // Mock user data, replace with auth service
  userEmail = 'john.doe@example.com'; // Mock user data, replace with auth service
  notificationCount: number = 0; // Initialize to 0



  ngOnInit(): void {
    //this.fetchNotificationCount();
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  navigateToPost(): void {
    this.router.navigate(['/post']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.isMenuOpen = false;
  }
  // fetchNotificationCount(): void {
  //   this.notificationService.getNotificationCount().subscribe({
  //     next: (count: number) => {
  //       this.notificationCount = count;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching notification count:', error);
  //       this.notificationCount = 0; // Fallback value
  //     }
  //   });
  // }
}