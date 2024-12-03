import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstcom',
  templateUrl: './firstcom.component.html',
  styleUrls: ['./firstcom.component.scss']
})
export class FirstcomComponent implements OnInit {
 

  constructor(private router: Router) {}

  goToHomePage() {
    // Navigate to the homepage
    this.router.navigate(['/home10h']);
  }

  goToDose() {
    // Navigate to the homepage
    this.router.navigate(['/dose']);
  }

  ngOnInit(): void {
  }
}
