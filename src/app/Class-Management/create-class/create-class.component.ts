import { Component } from '@angular/core';
import { ClassService } from '../../../Services/class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent {

  // Flag to control modal visibility
  isModalOpen: boolean = false;

  classdata = {
    name:'',
    cron:'',
    crby:'',
  };

  constructor(private classService: ClassService ) {}

  // Function to open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    this.classService.saveData(this.classdata);
    // Reset form data after submission
    this.classdata = {
      name:'',
      cron:'',
      crby:'',
    };
  }
}
