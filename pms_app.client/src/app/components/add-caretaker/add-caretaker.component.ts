import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../domain/services/modal.service';


@Component({
  selector: 'app-add-caretaker',
  standalone: false,
  templateUrl: './add-caretaker.component.html',
  styleUrl: './add-caretaker.component.css'
})
export class AddCaretakerComponent {

  addCaretakerForm!: FormGroup;
  submissionStatus: 'success' | 'error' | null = null;
  permissions = ["Granted", "Denied", "Pending"]
  loading = false;
loadingButton: string | null = null;

  constructor(private form: FormBuilder, private modalService: ModalService) {
    this.addCaretakerForm = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      profileImage: ['', [Validators.required]],
      permission: ['', [Validators.required]]
    })
  }

  get name(){
    return this.addCaretakerForm.get('name')
  }

  get email(){
    return this.addCaretakerForm.get('email')
  }

  get profileImage(){
    return this.addCaretakerForm.get('profileImage')
  }

  get permission(){
    return this.addCaretakerForm.get('permission')
  }

  onSubmit(){
    if(this.addCaretakerForm.valid){
      console.log('Submitted', this.addCaretakerForm.value);
      this.submissionStatus = 'success';
    } else {
      console.log('Form is invalid')
    }
  }

  closeModal() {
    this.modalService.close();
  }

handleAddCaretakerAndCloseModal(): void {
  if (this.addCaretakerForm.invalid) {
    this.addCaretakerForm.markAllAsTouched();
    return;
  }

  if (this.loading) return;

  this.loading = true;
  this.loadingButton = 'addCaretaker';

  // yield to render spinner
  setTimeout(() => {
    console.log('✅ Adding caretaker:', this.addCaretakerForm.value);

    // TODO: replace with actual save / API call
    // e.g., this.api.addCaretaker(this.addCaretakerForm.value).subscribe(...)

    this.loading = false;
    this.loadingButton = null;
    this.modalService.close(); // Close modal on successful submission
  }, 500);
}


}
