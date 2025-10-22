import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-caretaker',
  templateUrl: './add-caretaker.component.html',
  styleUrl: './add-caretaker.component.css'
})
export class AddCaretakerComponent {

  addCaretakerForm!: FormGroup;
  submissionStatus: 'success' | 'error' | null = null;
  permissions = ["Granted", "Denied", "Pending"]

  constructor(private form: FormBuilder) {
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

}
