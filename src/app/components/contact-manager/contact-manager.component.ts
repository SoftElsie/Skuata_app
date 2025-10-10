import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrl: './contact-manager.component.css'
})
export class ContactManagerComponent {
  showPhoneNumber = false;

  seePhoneNumber() {
    if(!this.showPhoneNumber){
      this.showPhoneNumber = true
    } else {
      this.showPhoneNumber = false
    }
    console.log(this.showPhoneNumber)
  }
}
