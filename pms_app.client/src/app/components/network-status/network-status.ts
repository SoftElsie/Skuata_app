import { Component, OnInit, NgZone } from '@angular/core';
import { SwUpdate, VersionEvent, VersionReadyEvent } from '@angular/service-worker';
import { OfflineIndicator } from '../../domain/services/offline-indicator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-network-status',
  standalone: false,   
  templateUrl: './network-status.html',
  styleUrls: ['./network-status.css'],
})
export class NetworkStatus implements OnInit {
  isOnline = true;
  showPopup = false;
  message = '';

  constructor(private offline: OfflineIndicator, private swUpdate: SwUpdate, private ngZone: NgZone) {}
  ngOnInit() {
    this.offline.onlineStatus$.subscribe((status) => {
      const previous = this.offline.previousStatus;
      this.isOnline = status;

      this.offline.previousStatus = status;

      if (!status) {
        this.message = 'You are offline — please check your network';
        this.showPopup = true;
        return;
      }

      if (previous === status) return;

      if (previous === false && status === true) {
        this.message = "You're back online";
        this.showPopup = true;
        setTimeout(() => (this.showPopup = false), 3000);
      }
    });

    window.addEventListener('online', () => this.updateNetworkStatus(true));
    window.addEventListener('offline', () => this.updateNetworkStatus(false));

    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
        if (event.type === 'VERSION_READY') {
          const e = event as VersionReadyEvent;
          if (confirm('New version available. Load new version?')) {
            window.location.reload();
          }
        }
      });
    }
  }

  updateNetworkStatus(status: boolean) {
    this.ngZone.run(() => {
      this.isOnline = status;
      if (!status) {
        this.message = 'You are offline — please check your network';
        this.showPopup = true;
      } else {
        this.message = "You're back online";
        this.showPopup = true;
        setTimeout(() => (this.showPopup = false), 3000);
      }
    });
  }
}
