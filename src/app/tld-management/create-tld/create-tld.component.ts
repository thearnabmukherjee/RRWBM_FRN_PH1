import { Component } from '@angular/core';
import { TldService } from '../../../Services/tld.service';

@Component({
  selector: 'app-create-tld',
  templateUrl: './create-tld.component.html',
  styleUrls: ['./create-tld.component.scss']
})
export class CreateTldComponent {

  // Flag to control modal visibility
  isModalOpen: boolean = false;

  tld = {
    name:'',
    plant:'',
    cron:'',
    crby:'',
  };

  constructor(private tldService: TldService ) {}

  // Function to open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    this.tldService.saveData(this.tld);
    // Reset form data after submission
    this.tld = {
      name:'',
      plant:'',
      cron:'',
      crby:'',
    };
  }
}
