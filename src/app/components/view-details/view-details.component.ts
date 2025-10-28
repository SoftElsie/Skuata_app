import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ViewDetailsComponent {
  property = {
    name: 'Backroom',
    description:'The room stretches on endlessly; it by the sickly hum of buzzing fluorescent lights. The carpet beneath your feet is damp, though no water is in sight. The yellow wallpaper is stained, peeling in places, repeating in an unsettlingly perfect pattern. Every corridor looks the same, yet somehow feels unfamiliar when you turn around The room stretches on endlessly; it by the sickly hum of buzzing fluorescent lights. The carpet beneath your feet is damp, though no water is in sight. The yellow wallpaper is stained, peeling in places, repeating in an unsettlingly perfect pattern. Every corridor looks the same, yet somehow feels unfamiliar when you turn around',
    mainImage: '/assets/images/image-card-3.png',
    thumbnails: [
      { url: '/assets/images/image-card-3.png', alt: 'Thumbnail 1' },
      { url: '/assets/images/image-card-2.png', alt: 'Thumbnail 2' },
      { url: '/assets/images/image-card-2.png', alt: 'Thumbnail 3' },
      { url: '/assets/images/image-card-2.png', alt: 'Thumbnail 4' },
    ],
    additionalThumbnails: 3,
  };

  showModal = false;
  currentImageIndex = 0;

  getShortDescription(text: string): string {
    if (!text) return '';
    return text.length > 600 ? text.substring(0, 350) + '...' : text;
  }

  openModal(event: Event): void {
    event.preventDefault();
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(formData: any): void {
    console.log('Form submitted:', formData);
  }

  // --- Image navigation ---
  nextImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.property.thumbnails.length;
  }

  prevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.property.thumbnails.length) %
      this.property.thumbnails.length;
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }
}
