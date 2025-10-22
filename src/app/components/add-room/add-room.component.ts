import { Component } from '@angular/core';
import { ButtonBaseComponent } from '../shared/base/button-base/button-base.component';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent extends ButtonBaseComponent {
     addRoom() {
    this.runWithLoader('add', () => {
      // your logic
      console.log('Room added');
    });
  }


}
