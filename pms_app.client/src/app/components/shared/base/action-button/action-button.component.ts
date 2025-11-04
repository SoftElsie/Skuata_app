import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoaderBtnComponent } from '../../widgets/loader-btn/loader-btn.component';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent {

    @Input() type: 'button' | 'submit' = 'button';
  @Input() active = false;         // show loader when true
  @Input() disabled = false;       // extra disable control
  @Output() action = new EventEmitter<void>();

  onClick() {
    if (this.disabled || this.active) return;
    this.action.emit();
  }
}