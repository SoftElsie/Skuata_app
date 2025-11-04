import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// Define an interface for the property data structure
export interface Property {
  price: number;
  unit: string; // e.g., '/mo'
  rating: number; // e.g., 3.2
  maxRating: number; // e.g., 5
  address: string;
  propertyType: string;
  isAvailable: boolean;
  views: number;
}

@Component({
  selector: 'app-property-card',
  standalone: false,
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent {
  // Use @Input to pass data into the component
  @Input() property: Property = {
    price: 1500,
    unit: '/mo',
    rating: 3,
    maxRating: 5,
    address: '16 Leyds Street, Sunnyside, Gauteng, 0002',
    propertyType: 'Backroom',
    isAvailable: true,
    views: 18
  };

  constructor() { }

  /**
   * Generates an array of star icons for the rating display.
   * @param rating The current rating (e.g., 3.2)
   * @param max The max rating (e.g., 5)
   * @returns An array of numbers where 1 is full, 0.5 is half, and 0 is empty.
   */
  getStars(rating: number, max: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= max; i++) {
      stars.push(i <= rating);
    }
    return stars;
  }
}