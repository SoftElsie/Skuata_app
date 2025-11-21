import { Component, Input, Output, EventEmitter, Injector } from '@angular/core';
import { ModalService } from '../../domain/services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = '';
  @Output() closeEvent = new EventEmitter<void>();

  isOpen = false;
  currentModalComponent: any;
  componentInputs: any = {};
  modalInjector: Injector | undefined;   // FIX HERE

  constructor(
    private modalService: ModalService,
    private injector: Injector
  ) {

    this.modalService.watchContent().subscribe(config => {
      if (!config) return;

      this.currentModalComponent = config.component;
      this.componentInputs = config.inputs || {};
      this.title = config.inputs?.title || '';

      // create injector ONCE — using undefined instead of null
      this.modalInjector = Injector.create({
        providers: [{ provide: 'inputs', useValue: this.componentInputs }],
        parent: this.injector
      });

      this.isOpen = true;
    });

    this.modalService.watch().subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  close() {
    this.modalService.close();
    this.modalInjector = undefined;   // FIX HERE
    this.closeEvent.emit();
  }

  onOverlayClick(event: MouseEvent) {
    this.close();
  }
}
