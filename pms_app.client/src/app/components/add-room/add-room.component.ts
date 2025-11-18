import { Component } from '@angular/core';
import { ModalService } from '../../domain/services/modal.service';

@Component({
  selector: 'app-add-room',
  standalone: false,
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent {
  loading = false;
  loadingButton: string | null = null;
  previewUrls: string[] = [];

  // NEW: track mode ('add' or 'edit')
  mode: 'add' | 'edit' = 'add';

  constructor(private modalService: ModalService) {}
   room = {
    title: '',
    address: '',
    city: '',
    price: '',
    availableDate: '',
    availability: '',
    ownerName: '',
    province: '',
    propertyType: '',
    contact: '',
    description: ''
  };

  ngOnInit() {
    this.modalService.watchMode().subscribe(mode => (this.mode = mode));
    this.modalService.watchRoomData().subscribe(data => {
      if (data && this.mode === 'edit') {
        this.room = { ...data }; // prefill form fields
      } else {
        this.room = {
          title: '',
          address: '',
          city: '',
          price: '',
          availableDate: '',
          availability: '',
          ownerName: '',
          province: '',
          propertyType: '',
          contact: '',
          description: ''
        };
      }
    });
  }

  handleAddRoom(): void {
    if (this.loading) return;

    this.loading = true;
    this.loadingButton = 'addRoom';

    setTimeout(() => {
      console.log(
        this.mode === 'edit' ? '✅ Editing room...' : '✅ Adding room...'
      );

      this.loading = false;
      this.loadingButton = null;
    }, 500);
  }

  addRoomAndCloseModal(): void {
    this.handleAddRoom();
    setTimeout(() => this.modalService.close(), 600);
  }

  closeModal(): void {
    this.modalService.close();
  }

  // image handling
  onFileSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (files) this.readFiles(files);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) this.readFiles(files);
  }

  private readFiles(files: FileList): void {
    this.previewUrls = [];
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e: any) => this.previewUrls.push(e.target.result);
        reader.readAsDataURL(file);
      }
    });
  }

  addOrEditRoom() {
  this.loading = true;

  setTimeout(() => {
    if (this.mode === 'edit') {
      this.modalService.emitSavedRoom(this.room);
    } else {
      this.modalService.emitSavedRoom(this.room);
    }

    this.loading = false;
    this.closeModal();
  }, 500);
}

}


