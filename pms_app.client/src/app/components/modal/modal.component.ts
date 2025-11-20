import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../domain/services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = '';
  @Output() closeEvent = new EventEmitter<void>();

  isOpen = false;
  currentModalComponent: any;

  constructor(private modalService: ModalService) {
    this.modalService.watch().subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
      console.log('ModalComponent isOpen:', this.isOpen); 
    });
    this.modalService.watchContent().subscribe(component => {
      this.currentModalComponent = component;
    });
  }

  close() {
    this.modalService.close();
    this.closeEvent.emit();
  }

  onOverlayClick(event: MouseEvent) {
    this.close();
  }
}