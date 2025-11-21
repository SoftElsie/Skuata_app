
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display = new BehaviorSubject<boolean>(false);
  private modalContent = new BehaviorSubject<any>(null);
    private mode = new BehaviorSubject<'add' | 'edit'>('add');
  private roomData = new BehaviorSubject<any>(null); 

  watch(): Observable<boolean> {
    return this.display.asObservable();
  }

  watchContent(): Observable<any> {
    return this.modalContent.asObservable();
  }

  open(component: any, inputs: any = {}) {
  this.modalContent.next({
    component,
    inputs
  });
  this.display.next(true);
}


  close() {
    this.display.next(false);
    this.modalContent.next(null); 
  }
  private roomSaved = new BehaviorSubject<any>(null);
watchSavedRoom() { return this.roomSaved.asObservable(); }
emitSavedRoom(room: any) { this.roomSaved.next(room); }


watchRoomData(): Observable<any> {
    return this.roomData.asObservable();
  }

   openM(mode: 'add' | 'edit' = 'add', data: any = null) {
    this.mode.next(mode);
    this.roomData.next(data);
    this.display.next(true);
  }

  watchMode(): Observable<'add' | 'edit'> {
    return this.mode.asObservable();
  }
 
}
