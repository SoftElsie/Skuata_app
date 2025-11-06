import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  standalone: false,
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit{
  contactForm!: FormGroup;
  loading = false;
  loadingButton: string | null = null;
  menuItems = [
    { label: 'Contact Info', route: '/contact-info' },
    { label: 'Password & Security', route: '/security' },
    { label: 'Notification Settings', route: '/notifications' },
  ];

  cities: string[] = [
    'Johannesburg',
    'Cape Town',
    'Durban',
    'Pretoria',
    'Port Elizabeth',
    'Bloemfontein',
    'Nelspruit',
    'Polokwane',
    'Kimberley',
  ];

  provinces: string[] = [
    'Gauteng',
    'Mpumalanga',
    'Limpopo',
    'Kwazulu Natal',
    'Western Cape',
    'Eastern Cape',
    'Free State',
    'Northern Cape',
    'North West',
  ];

  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit(): void {
   
    this.contactForm = this.fb.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],

      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern(/^[0-9]{4,6}$/)]]
    });
  }

 handleSaveChanges(): void {
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }

  if (this.loading) return;

  this.loading = true;
  this.loadingButton = 'saveChanges';

  // yield to render spinner
  setTimeout(() => {
    console.log('✅ Saving changes:', this.contactForm.value);

    // TODO: replace with actual save logic / API call
    // e.g., this.api.save(this.contactForm.value).subscribe(...)

    this.loading = false;
    this.loadingButton = null;
  }, 500);
}
}

