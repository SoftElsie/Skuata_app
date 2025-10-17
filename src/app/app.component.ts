import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { RouterOutlet } from '@angular/router';
=======
import { Router, NavigationEnd } from '@angular/router'; // Added NavigationEnd
import { TopNavComponent } from './components/shared/core/top-nav/top-nav.component';

>>>>>>> Stashed changes

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  showFullLinksOnFooter: boolean = true;
  centerFooterContent: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getForecasts();
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

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'skuata_app.client';
}
