// modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display = new BehaviorSubject<boolean>(false);
  private mode = new BehaviorSubject<'add' | 'edit'>('add');
  private roomData = new BehaviorSubject<any>(null);

  watch(): Observable<boolean> {
    return this.display.asObservable();
  }

  watchMode(): Observable<'add' | 'edit'> {
    return this.mode.asObservable();
  }

  watchRoomData(): Observable<any> {
    return this.roomData.asObservable();
  }

  open(mode: 'add' | 'edit' = 'add', data: any = null) {
    this.mode.next(mode);
    this.roomData.next(data);
    this.display.next(true);
  }

  close() {
    this.display.next(false);
    this.mode.next('add');
    this.roomData.next(null);
  }
  private roomSaved = new BehaviorSubject<any>(null);
watchSavedRoom() { return this.roomSaved.asObservable(); }
emitSavedRoom(room: any) { this.roomSaved.next(room); }

}
