import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface com6 {
  name: string;
  
 
}

@Component({
  selector: 'app-sixthcom',
  templateUrl: './sixthcom.component.html',
  styleUrls: ['./sixthcom.component.scss']
})
export class SixthcomComponent implements OnInit {
  geometries: com6[] = [
     { name: ' No dose analysis records found! '},
    
  ];

  constructor(private router:Router) { }
  navigateToCertainPage() {
    // Add the specific route to navigate to
    this.router.navigate(['/ar41']);
  }

  ngOnInit(): void {
  }

}
