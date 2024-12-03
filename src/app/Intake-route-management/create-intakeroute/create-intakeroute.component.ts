import { Component } from '@angular/core';
import { IntakeRouteService } from '../../../Services/intake-route.service';

@Component({
  selector: 'app-create-intakeroute',
  templateUrl: './create-intakeroute.component.html',
  styleUrls: ['./create-intakeroute.component.scss']
})
export class CreateIntakerouteComponent {

  // Flag to control modal visibility
  isModalOpen: boolean = false;

  intakeroute = {
    name:'',
    cron:'',
    crby:'',
  };

  constructor(private intakerouteService: IntakeRouteService ) {}

  // Function to open the modal
  openModal() {
    this.isModalOpen = true;
  }

  // Function to close the modal
  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    this.intakerouteService.saveData(this.intakeroute);
    // Reset form data after submission
    this.intakeroute = {
      name:'',
      cron:'',
      crby:'',
    };
  }
}
