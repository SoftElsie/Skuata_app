import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-footer',
  standalone: false,
  templateUrl: './dash-footer.component.html',
  styleUrls: ['./dash-footer.component.css']
})
export class DashFooterComponent {
 currentYear = new Date().getFullYear()

  constructor(private router: Router) {}

  navigationLinks: any[] = ["Home", "Contact Us", "About Us"]
  roomLinks: any[] = ["Find Rooms", "Post Rooms"]

   showFooter = false;

  socialIcons = [
    {
      name: "LinkedIn",
      Icon: "assets/Icons/lucide/linkedin.svg",
    },
    {
      name: "Instagram",
      Icon: "assets/Icons/lucide/instagram.svg",
    },
    {
      name: "Twitter",
      Icon: "assets/Icons/lucide/twitter.svg",
      
    },
  ]

  navigateTo(link: string) {
    switch (link) {
      case 'Home':
        this.router.navigate(['/app']);
        break;
      case 'Find Rooms':
        this.router.navigate(['/app']);
        break;
      case 'Post Rooms':
        this.router.navigate(['/app/add-room']);
        break;
      case 'Contact Us':
     this.router.navigate(['/app/add-room']);
        break;
      case 'About Us':
        this.router.navigate(['/app/about-us']);
        break;
      default:
        break;
    }
  }

  legalLinks = ["Terms of Service", "Privacy Policy", "Cookie Settings"]
}
