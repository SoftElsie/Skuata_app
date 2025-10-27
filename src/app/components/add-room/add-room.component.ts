import { Component } from '@angular/core';
import { ModalService } from '../../domain/services/modal.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent {

  constructor(private modalService: ModalService) { }

  addRoomAndCloseModal() {
    // Logic to add room will go here
    this.modalService.close();
  }

  closeModal() {
    this.modalService.close();
  }
}
