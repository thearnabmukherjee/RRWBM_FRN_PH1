import { Component } from '@angular/core';
import { PlantService } from '../../../Services/plant.service';

@Component({
  selector: 'app-create-plant',
  templateUrl: './create-plant.component.html',
  styleUrls: ['./create-plant.component.scss']
})
export class CreatePlantComponent {

  // Flag to control modal visibility
  isModalOpen: boolean = false;

  plant = {
    name:'',
    loc:'',
  };

  constructor(private plantService: PlantService ) {}

  // Function to open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    this.plantService.saveData(this.plant);
    // Reset form data after submission
    this.plant = {
      name:'',
      loc:'',
    };
  }
}
