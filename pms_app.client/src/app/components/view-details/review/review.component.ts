import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Review {
  name: string;
  date: string; // DD/MM/YYYY
  rating: number; // 1-5
  text: string; // Changed from 'comment' to 'text'
}

@Component({
  selector: 'app-reviews',
  standalone: false,
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
 
})
export class ReviewComponent implements OnInit {
  allReviews: Review[] = [
    {
      name: 'Duncan Sihongo',
      date: '12/09/2025',
      rating: 5,
      text: 'I don’t know if I should even be writing this, but the place I ended up in didn’t feel real. It looked like an endless office space, yellow walls buzzing under the flickering fluorescent lights, and the smell of damp carpet everywhere. At first, I thought it was just an abandoned floor of some building, but the further I walked, the more wrong it felt.'
    },
    {
      name: 'Lethabo',
      date: '14/09/2025',
      rating: 4,
      text: 'I don’t know if I should even be writing this, but the place I ended up in didn’t feel real. At first, I thought it was just an abandoned floor of some building, but the further I walked, the more wrong it felt.'
    },
    {
      name: 'Palesa',
      date: '10/09/2025',
      rating: 5,
      text: 'Excellent! the service is very good and the workers are very patient and very respectful '
    },
    {
      name: 'Thabo',
      date: '11/09/2025',
      rating: 2,
      text: 'Not what I expected. Disappointed with the quality.'
    },
    {
      name: 'Naledi',
      date: '13/09/2025',
      rating: 4,
      text: 'Good value for money. Would buy again.'
    },
    {
      name: 'Zanele',
      date: '15/09/2025',
      rating: 5,
      text: 'Absolutely fantastic! I am very happy with this.'
    },
    {
      name: 'Sipho',
      date: '16/09/2025',
      rating: 1,
      text: 'A complete waste of money. I would not recommend this to anyone.'
    },
    {
      name: 'Lerato',
      date: '17/09/2025',
      rating: 4,
      text: 'Pretty good, but there is room for improvement.'
    }
  ];
  reviews: Review[] = []; // This will be the currently displayed reviews
  initialDisplayCount: number = 2;
  displayCount: number = this.initialDisplayCount;

  overallRating: number = 0;
  totalRatings: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateOverallRating();
    this.updateDisplayedReviews();
  }

  private calculateOverallRating(): void {
    if (this.allReviews.length === 0) {
      this.overallRating = 0;
      this.totalRatings = 0;
      return;
    }

    const total = this.allReviews.reduce((sum, review) => sum + review.rating, 0);
    this.overallRating = parseFloat((total / this.allReviews.length).toFixed(1));
    this.totalRatings = this.allReviews.length;
  }

  updateDisplayedReviews(): void {
    this.reviews = this.allReviews.slice(0, this.displayCount);
  }

  loadMoreReviews(): void {
    this.displayCount += this.initialDisplayCount;
    if (this.displayCount > this.allReviews.length) {
      this.displayCount = this.allReviews.length;
    }
    this.updateDisplayedReviews();
  }

  getOverallStars(rating: number): boolean[] {
    const stars = [];
    const roundedRating = Math.round(rating * 2) / 2; // Round to nearest 0.5
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= roundedRating);
    }
    return stars;
  }
}

