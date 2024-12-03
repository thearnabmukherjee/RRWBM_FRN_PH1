import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface com4 {
  name: string;
  type: string;
  mon: string;
  act: string;
  inta: string;
  ced: string;
  createdOn: string;
 
}

@Component({
  selector: 'app-fourthcom',
  templateUrl: './fourthcom.component.html',
  styleUrls: ['./fourthcom.component.scss']
})
export class FourthcomComponent implements OnInit {
  geometries: com4[] = [
     { name: ' Server generated 07-03-2024 11:47:18 ',type: 'Auto', createdOn: '2024-03-07 11:12:23', mon: 'baseline', act:'BDL', inta:'<Rl', ced:'<RL',  },
    
  ];

  constructor(private router:Router) { }
  navigateToCertainPage() {
    // Add the specific route to navigate to
    this.router.navigate(['/co60']);
  }
  navigateToView() {
    this.router.navigate(['/co60view'])
  }


  ngOnInit(): void {
  }

}