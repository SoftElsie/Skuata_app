
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

  hoveredStar: number = 0;   // Track which star is hovered
  selectedRating: number = 0; // Track user's selected rating

  constructor() { }

  /**
   * Handle star hover (light up to hovered star)
   */
  hoverStar(star: number): void {
    this.hoveredStar = star;
  }

  /**
   * Reset star highlight when mouse leaves
   */
  resetHover(): void {
    this.hoveredStar = 0;
  }

  /**
   * When a star is clicked, record the rating
   */
  selectStar(star: number): void {
    this.selectedRating = star;
    this.property.rating = star; // Update visual immediately
    console.log('User rated this property:', star);
    // TODO: optionally send rating to backend service here
  }

  /**
   * Generate an array of star icons for the rating display
   */
  getStars(rating: number, max: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= max; i++) {
      stars.push(i <= rating);
    }
    return stars;
  }
}
