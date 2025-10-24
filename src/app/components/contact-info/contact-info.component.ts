import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonBaseComponent } from '../shared/base/button-base/button-base.component';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent  extends ButtonBaseComponent implements OnInit{
  contactForm!: FormGroup;
  menuItems = [
    { label: 'Contact Info', route: '/contact-info' },
    { label: 'Password & Security', route: '/security' },
    { label: 'Notification Settings', route: '/notifications' },
  ];

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
   
    this.contactForm = this.fb.group({

      firstName: ['John', Validators.required],
      lastName: ['Doe', Validators.required],
      email: ['john@example.com', [Validators.required, Validators.email]],
      phoneNumber: ['0813652348', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],

      address: ['23 Patrick Baird Street, Arcadia', Validators.required],
      city: ['Pretoria', Validators.required],
      province: ['Gauteng', Validators.required],
      postalCode: ['0002', [Validators.required, Validators.pattern(/^[0-9]{4,6}$/)]]
    });
  }

 handleSaveChanges(): void {
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }

  this.runWithLoader('save', () => {
    console.log('✅ Saving changes:', this.contactForm.value);
    setTimeout(() => {
      // save completed
      console.log('Save completed');
    }, 1000);
  });
}

}
