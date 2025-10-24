import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loader-btn',
  templateUrl: './loader-btn.component.html',
  styleUrl: './loader-btn.component.css'
})
export class LoaderBtnComponent {
@Input() active = false;            // shows the loader when true
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