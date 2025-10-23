import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../domain/services/modal.service'; // Import ModalService

interface Room {
  id: string;
  name: string;
  type: string;
  size: string;
  image?: File | null;
}
@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrl: './profile-icon.component.css'
})
export class ProfileIconComponent {
  rooms: Room[] = [];
  isDialogOpen = false;

  roomForm: FormGroup;
  selectedFile: File | null = null;

 constructor(private fb: FormBuilder, private router: Router, private modalService: ModalService) { // Inject ModalService
  this.roomForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    size: ['', Validators.required],
  });
}
goToAddRoomPage() {
  this.modalService.open(); // Open the modal
}

  closeDialog() {
    this.isDialogOpen = false;
    this.roomForm.reset();
  }

  addRoom() {
    if (this.roomForm.valid) {
      const room: Room = {
        id: Date.now().toString(),
        ...this.roomForm.value,
        image: this.selectedFile
      };
      this.rooms.push(room);
      this.selectedFile = null;
      this.closeDialog();
    }
  }

  deleteRoom(id: string) {
    this.rooms = this.rooms.filter(room => room.id !== id);
  }
}
