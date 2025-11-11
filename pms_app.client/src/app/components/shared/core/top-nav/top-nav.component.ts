import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';
import { ModalService } from '../../../../domain/services/modal.service';



@Component({
  selector: 'app-top-nav',
  standalone: false,
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {


    currentLayout: 'container' | 'auth' | 'dashboard' | null = null;

  constructor(public router:Router, private modalService: ModalService){}
  isLoggedIn = false;
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

    //simulate login state
    this.checkLoginState();
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

  if (this.isProfileOpen) {
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.profile-dropdown') && !target.closest('.profile-btn')) {
        this.isProfileOpen = false;
        document.removeEventListener('click', close);
      }
    };
    setTimeout(() => document.addEventListener('click', close), 0);
  }
}


  navigateTo(path: string) {
    this.router.navigate([path]);
    this.isMenuOpen = false;
  }
  
 openAddRoomModal() {
  this.modalService.open();
}

  goToNotifications() {
    this.router.navigate(['app/notifications']);
  }


  checkLoginState() {
    const user = localStorage.getItem('user');
    this.isLoggedIn = !!user;
  }

  signOut() {
    this.isLoggedIn = false;
    this.router.navigate(['/signout']);
  }
}