import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-loader-btn',
  standalone: false,
  templateUrl: './loader-btn.component.html',
  styleUrls: ['./loader-btn.component.css']  // <-- must be plural
})
export class LoaderBtnComponent {
  @Input() active = false;
  @Output() started = new EventEmitter<void>();
  @Output() stopped = new EventEmitter<void>();

  start() {
    if (!this.active) {
      this.active = true;
      this.started.emit();
    }
  }

  stop() {
    if (this.active) {
      this.active = false;
      this.stopped.emit();
    }
  }
}
