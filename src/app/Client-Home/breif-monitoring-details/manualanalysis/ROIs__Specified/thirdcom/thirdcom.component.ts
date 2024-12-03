import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface com3 {
  name: string;
  type: string;
  mon: string;
  act: string;
  inta: string;
  ced: string;
  createdOn: string;
 
}

@Component({
  selector: 'app-thirdcom',
  templateUrl: './thirdcom.component.html',
  styleUrls: ['./thirdcom.component.scss']
})
export class ThirdcomComponent implements OnInit {
  geometries: com3[] = [
     { name: ' Server generated 07-03-2024 11:47:18 ',type: 'Auto', createdOn: '2024-03-07 11:12:23', mon: 'baseline', act:'BDL', inta:'<Rl', ced:'<RL',  },
    
  ];

  constructor(private router:Router) { }

  
  navigateToCertainPage() {
    // Add the specific route to navigate to
    this.router.navigate(['/cs137']);
  }
  navigateToView() {
    this.router.navigate(['/cs137view'])
  }

  ngOnInit(): void {
  }

}