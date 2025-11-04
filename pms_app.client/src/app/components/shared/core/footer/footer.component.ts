import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls:[ './footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear()

  constructor(private router: Router) {}

  navigationLinks = ["Home", "About Us", "Contact Us"]
  roomLinks = ["Find Rooms", "Post Rooms"]

   showFooter = false;

  socialIcons = [
    {
      name: "LinkedIn",
      icon: "assets/Icons/linkedin.png",
    },
    {
      name: "Instagram",
      icon: "assets/Icons/instagram.png",
    },
    {
      name: "Twitter",
      icon: "assets/Icons/twitter.png",
    },
  ]

 

  legalLinks = ["Terms of Service", "Privacy Policy", "Cookie Settings"]
}
