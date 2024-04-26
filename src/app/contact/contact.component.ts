import { Component } from '@angular/core';
import { ContactUs } from '../shared/contactus.model';
import { SharedService } from '../shared/shared.servce';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public AskConfirmation: boolean = false;
  constructor(public _sharedservice: SharedService) {

  }
  public contactus: ContactUs = new ContactUs();
  handleAddClick() {
    this.AskConfirmation=true;
    console.log("ask for confirmation")
   }
  handleDiscardClick() { }
  onSubmit() {
    this._sharedservice.sendEmail(this.contactus).subscribe(response => {
      // Handle success or error response from backend
      console.log('Response from backend:', response);
    });
  }
  onDismissHandler() {
    // Define your dismiss logic here
    console.log('Dismissed');
  }

  onConfirmHandler() {
    // Define your confirm logic here
    console.log('Confirmed');
  }
}
