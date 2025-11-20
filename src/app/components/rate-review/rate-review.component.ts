import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rate-review',
  templateUrl: './rate-review.component.html',
  styleUrl: './rate-review.component.css'
})
export class RateReviewComponent {

  rateReviewForm!: FormGroup;
  submissionStatus: 'success' | 'error' | null = null;

  rating = 0;
  setRating(value: number) {
    this.rating = value;
  }

  constructor(private form: FormBuilder){
    this.rateReviewForm = this.form.group({
      review: ['']
    })
  }

  get review(){
    return this.rateReviewForm.get('review')
  }

  onSubmit(){
    console.log(this.rating)
  }

}
