import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit {
  constructor(private router: Router) { }
isLoggedIn = false; 
  ngOnInit(): void {
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  navigateToPost(): void {
    this.router.navigate(['/post']);
  }

  
}
