import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfflineIndicator {
  private onlineStatus = new BehaviorSubject<boolean>(navigator.onLine);
  onlineStatus$ = this.onlineStatus.asObservable();

  previousStatus = navigator.onLine;  // ✅ Track the last known state

  constructor() {
    window.addEventListener('online', () => this.updateStatus(true));
    window.addEventListener('offline', () => this.updateStatus(false));
  }

  private updateStatus(status: boolean) {
    this.previousStatus = this.onlineStatus.value;
    this.onlineStatus.next(status);
  }
}
