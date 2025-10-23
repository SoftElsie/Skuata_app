import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalService } from '../../domain/services/modal.service'; // Import ModalService

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit, AfterViewInit {

  constructor(private modalService: ModalService) { } // Inject ModalService

  ngOnInit() {
    console.log('AddRoomComponent ngOnInit');
  }

  ngAfterViewInit() {
    console.log('AddRoomComponent ngAfterViewInit');
  }

  closeModal() {
    this.modalService.close(); // Close the modal using the service
  }
}
