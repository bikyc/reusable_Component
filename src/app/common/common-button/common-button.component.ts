import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPlus, faTimes, faSave, faEdit, faTimes as faClose } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'common-button',
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss'
})
export class CommonButtonComponent {
  @Input() label: string = '';
  @Input() variant: 'default' | 'danger' | 'success' | 'warning' = 'default';
  @Input() buttonType: 'add' | 'delete' | 'update' | 'save' | 'close' | 'discard' = 'add';
  @Output() onClick = new EventEmitter<void>();

  public buttonClass: string='';

  faPlus = faPlus;
  faTimes = faTimes;
  faSave = faSave;
  faEdit = faEdit;
  faClose = faClose;

  constructor(private library: FaIconLibrary) {
    library.addIcons(faPlus, faTimes, faSave, faEdit, faClose);
    this.setButtonClass();
  }

  setButtonClass() {
    const variants: { [key: string]: string } = {
      'default': 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
      'danger': 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
      'cancel': 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
      'success': 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
      'warning': 'bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded',
      'discard': 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
    };
  
    this.buttonClass = variants[this.variant] || variants['default'];
  }
}
