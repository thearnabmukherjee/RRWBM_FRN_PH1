import { Component } from '@angular/core';
import { RadionuclideService } from '../../../Services/radionuclide.service';

@Component({
  selector: 'app-create-radionuclide',
  templateUrl: './create-radionuclide.component.html',
  styleUrls: ['./create-radionuclide.component.scss']
})
export class CreateRadionuclideComponent {

  // Flag to control modal visibility
  isModalOpen: boolean = false;

  radionuclide = {
    name:'',
    mda:'',
    kev:'',
    yield:'',
  };

  constructor(private radionuclideService: RadionuclideService ) {}

  // Function to open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    this.radionuclideService.saveData(this.radionuclide);
    // Reset form data after submission
    this.radionuclide = {
      name:'',
      mda:'',
      kev:'',
      yield:'',
    };
  }
}
