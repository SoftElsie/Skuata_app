import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-footer',
  templateUrl: './dash-footer.component.html',
  styleUrls: ['./dash-footer.component.css']
})
export class DashFooterComponent {
 currentYear = new Date().getFullYear()

  constructor(private router: Router) {}

  navigationLinks = ["Home", "About Us", "Contact Us"]
  roomLinks = ["Find Rooms", "Post Rooms"]

   showFooter = false;

  socialIcons = [
    {
      name: "LinkedIn",
      icon: "assets/icons/linkedin.png",
    },
    {
      name: "Instagram",
      icon: "assets/icons/instagram.png",
    },
    {
      name: "Twitter",
      icon: "assets/icons/twitter.png",
    },
  ]

 

  legalLinks = ["Terms of Service", "Privacy Policy", "Cookie Settings"]
}
