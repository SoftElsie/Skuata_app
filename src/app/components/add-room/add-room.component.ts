import { Component } from '@angular/core';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent{
    loading = false;
loadingButton: string | null = null;

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


}
