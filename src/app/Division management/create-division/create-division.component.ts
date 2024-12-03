import { Component } from '@angular/core';
import { DivisionService } from '../../../Services/division.service';

@Component({
  selector: 'app-create-division',
  templateUrl: './create-division.component.html',
  styleUrls: ['./create-division.component.scss']
})
export class CreateDivisionComponent {

  // Flag to control modal visibility
  isModalOpen: boolean = false;

  division = {
    name:'',
    des:'',
   
  };

  constructor(private divisionService: DivisionService ) {}

  // Function to open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    this.divisionService.saveData(this.division);
    // Reset form data after submission
    this.division = {
      name:'',
      des:'',
    };
  }
}
