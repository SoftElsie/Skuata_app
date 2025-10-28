import { Component, OnInit} from '@angular/core';
<<<<<<< HEAD
import { NavigationEnd, Router } from '@angular/router';
=======
import { Router } from '@angular/router';
>>>>>>> origin/Development
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
<<<<<<< HEAD
import { filter } from 'rxjs';
=======
>>>>>>> origin/Development



@Component({
  selector: 'app-top-nav',
<<<<<<< HEAD
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {


    currentLayout: 'container' | 'auth' | 'dashboard' | null = null;

=======
  standalone: true,
  imports: [CommonModule,RouterModule,  NgIf],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit {
  // constructor(private router: Router,notificationService: NotificationServicet) {}
>>>>>>> origin/Development
  constructor(private router:Router){}
  isLoggedIn = true;
  isMenuOpen = false;
  isProfileOpen = false;
<<<<<<< HEAD
  userName = 'John Doe';
  userEmail = 'john.doe@example.com'; 
  notificationCount: number = 0; 


ngOnInit(): void {
  this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    )
    .subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;

      if (url.startsWith('/app')) {
        this.currentLayout = 'container';
      } else if (url.startsWith('/auth')) {
        this.currentLayout = 'auth';
      } else if (url.startsWith('')) {
        this.currentLayout = 'dashboard';
      } else {
        this.currentLayout = null;
      }
    });
}


  navigateToDashboard(): void {
    this.router.navigate(['']);
=======
  userName = 'John Doe'; // Mock user data, replace with auth service
  userEmail = 'john.doe@example.com'; // Mock user data, replace with auth service
  notificationCount: number = 0; // Initialize to 0



  ngOnInit(): void {
    //this.fetchNotificationCount();
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
>>>>>>> origin/Development
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
<<<<<<< HEAD
 
=======
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
>>>>>>> origin/Development
}