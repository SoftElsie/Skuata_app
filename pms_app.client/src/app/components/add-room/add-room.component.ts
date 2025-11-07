import { Component } from '@angular/core';
import { ModalService } from '../../domain/services/modal.service';

@Component({
  selector: 'app-add-room',
  standalone: false,
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent{
    loading = false;
loadingButton: string | null = null;
previewUrls: string[] = [];


handleAddRoom(): void {
  if (this.loading) return;

  this.loading = true;
  this.loadingButton = 'addRoom';

  // yield to render spinner
  setTimeout(() => {
    console.log('✅ Adding room');

    // TODO: replace with actual add room logic
    // e.g., this.api.addRoom(...).subscribe(...)

    this.loading = false;
    this.loadingButton = null;
  }, 500);
}


  constructor(private modalService: ModalService) { }

  addRoomAndCloseModal() {
    // Logic to add room will go here
    this.modalService.close();
  }

  closeModal() {
    this.modalService.close();
  }
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
}
