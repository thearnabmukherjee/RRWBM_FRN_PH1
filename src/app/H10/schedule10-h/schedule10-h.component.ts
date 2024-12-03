import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule10-h',
  templateUrl: './schedule10-h.component.html',
  styleUrl: './schedule10-h.component.scss'
})
export class Schedule10HComponent {

  constructor(private router: Router) {}

  schedule() {
    // Implement your scheduling logic here
    console.log('Schedule button clicked');
  }

  goToHomePage() {
    // Navigate to the homepage
    this.router.navigate(['/view10-h']);
  }
}
