import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface com5 {
  name: string;
  type: string;
  mon: string;
  act: string;
  inta: string;
  ced: string;
  createdOn: string;
 
}

@Component({
  selector: 'app-fifthcom',
  templateUrl: './fifthcom.component.html',
  styleUrls: ['./fifthcom.component.scss']
})
export class FifthcomComponent implements OnInit {
  geometries: com5[] = [
     { name: ' Server generated 07-03-2024 11:47:18 ',type: 'Auto', createdOn: '2024-03-07 11:12:23', mon: 'baseline', act:'BDL', inta:'<Rl', ced:'<RL',  },
    
  ];
  constructor(private router:Router) { }
  navigateToCertainPage() {
    // Add the specific route to navigate to
    this.router.navigate(['/k40']);
  }
  navigateToView() {
    this.router.navigate(['/k40view'])
  }


  ngOnInit(): void {
  }

}