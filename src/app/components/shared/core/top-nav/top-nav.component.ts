import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';



@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {


    currentLayout: 'container' | 'auth' | 'dashboard' | null = null;

  constructor(private router:Router){}
  isLoggedIn = true;
  isMenuOpen = false;
  isProfileOpen = false;
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
 
}