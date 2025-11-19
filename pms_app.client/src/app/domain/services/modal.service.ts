// modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display = new BehaviorSubject<boolean>(false);
  private modalContent = new BehaviorSubject<any>(null); // To store the component type

  watch(): Observable<boolean> {
    return this.display.asObservable();
  }

  watchContent(): Observable<any> {
    return this.modalContent.asObservable();
  }

  open(component: any) {
    this.modalContent.next(component);
    this.display.next(true);
  }

  close() {
    this.display.next(false);
    this.modalContent.next(null); // Clear content when closing
  }
  private roomSaved = new BehaviorSubject<any>(null);
watchSavedRoom() { return this.roomSaved.asObservable(); }
emitSavedRoom(room: any) { this.roomSaved.next(room); }

}
