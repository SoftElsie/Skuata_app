import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from '../../../domain/services/modal.service';

@Component({
  selector: 'app-rate-review',
  standalone: false,
  templateUrl: './rate-review.html',
  styleUrl: './rate-review.css',
})
export class RateReviewComponent {
 rateReviewForm!: FormGroup;
  submissionStatus: 'success' | 'error' | null = null;

  rating = 0;

  constructor(
    private form: FormBuilder,
    private modalService: ModalService
  ) {
    this.rateReviewForm = this.form.group({
      review: ['']
    });
  }

  // Set rating when star is clicked
  setRating(value: number) {
    this.rating = value;
  }

  // Accessor for review form control
  get review() {
    return this.rateReviewForm.get('review');
  }

  // Form submit handler
  onSubmit() {
    console.log("Rating:", this.rating);
    console.log("Review:", this.review?.value);

    // TODO: send to backend here

    // Optional: close modal after submit
    // this.modalService.close();
  }

  // Close modal
  close() {
    this.modalService.close();
  }
}
