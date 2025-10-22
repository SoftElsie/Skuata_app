import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/shared/core/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
})
export class AppComponent implements OnInit {
  showFullLinksOnFooter: boolean = true;
  centerFooterContent: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const authRoutes = ['/register', '/login'];
        if (authRoutes.some(route => event.urlAfterRedirects.includes(route))) {
          this.showFullLinksOnFooter = false;
          this.centerFooterContent = true;
        } else {
          this.showFullLinksOnFooter = true;
          this.centerFooterContent = false;
        }
      }
    });
  }

  title = 'skuata_app.client';
}