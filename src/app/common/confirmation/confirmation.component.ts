import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
   styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  @Input() title: string = 'Confirm';
  @Input() message: string = 'Are you sure?';
  @Input() confirmButtonLabel: string = 'Yes';
  @Input() dismissButtonLabel: string = 'No';

  @Output() onConfirm = new EventEmitter<void>();
  @Output() onDismiss = new EventEmitter<void>();

  isVisible = true;

  ngOnInit() {
    console.log('Confirmation component initialized');
    this.show();
  }

  ngOnDestroy() {
    console.log('Confirmation component destroyed');
  }

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  confirm() {
    this.onConfirm.emit();
    this.hide();
  }

  dismiss() {
    this.onDismiss.emit();
    this.hide();
  }
}
