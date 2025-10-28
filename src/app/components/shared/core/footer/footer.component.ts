import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',

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
=======

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

>>>>>>> origin/Development
}
