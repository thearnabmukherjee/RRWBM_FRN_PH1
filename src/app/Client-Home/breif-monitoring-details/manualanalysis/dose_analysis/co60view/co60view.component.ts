import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-co60view',
  templateUrl: './co60view.component.html',
  styleUrls: ['./co60view.component.scss']
})
export class Co60viewComponent {
  name: string;
  class: string;
  intakeDate: Date;
  effCalFactor: string;
  retainedFraction: string;
  doseCoefficient: string;
  dynamicMDA: string;
  selectedIntakeDate: Date;
  intakeRoute: string;
  countRate: string;
  activity: string;
  intake: string;
  ced: string;
  comments: string;

  constructor(private router: Router) {
    // Initialize dummy data
    this.name = 'Server Specified Name 21:23:2022';
    this.class = 'M';
    this.intakeDate = new Date();
    this.effCalFactor = '123';
    this.retainedFraction = '0.5';
    this.doseCoefficient = '0.001-e1';
    this.dynamicMDA = '100';
    this.selectedIntakeDate = new Date();
    this.intakeRoute = 'ingestion';
    this.countRate = '200';
    this.activity = '150';
    this.intake = '100';
    this.ced = '0.05';
    this.comments = 'this is the comment section dummy data';
  }

  navigateToCertainPage() {
    // Add the specific route to navigate to
    this.router.navigate(['/manualanalysis']);
  }
  
}
