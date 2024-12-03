import { Component } from '@angular/core';
import { GeometryService } from '../../../Services/geometry.service';

@Component({
  selector: 'app-create-geometry',
  templateUrl: './create-geometry.component.html',
  styleUrls: ['./create-geometry.component.scss']
})
export class CreateGeometryComponent {

  // Flag to control modal visibility
  isModalOpen: boolean = false;

  geodata = {
    name:'',
    cron:'',
    crby:'',
  };

  constructor(private geometryService: GeometryService ) {}

  // Function to open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    this.geometryService.saveData(this.geodata);
    // Reset form data after submission
    this.geodata = {
      name:'',
      cron:'',
      crby:'',
    };
  }
}
