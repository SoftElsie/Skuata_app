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
  constructor(private router: Router) {}
  isLoggedIn = false;
  isMenuOpen = false;


  ngOnInit(): void {
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
  
}