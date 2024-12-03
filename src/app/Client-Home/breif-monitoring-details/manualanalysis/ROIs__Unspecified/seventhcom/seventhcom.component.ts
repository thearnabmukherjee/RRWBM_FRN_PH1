import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface com7{
  name: string;
}

@Component({
  selector: 'app-seventhcom',
  templateUrl: './seventhcom.component.html',
  styleUrls: ['./seventhcom.component.scss']
})
export class SeventhcomComponent  implements OnInit {
  geometries: com7[] = [
     { name: ' No dose analysis records found!! ' },
    
  ];

  constructor(private router: Router){}
  navigateToCertainPage() {
    // Add the specific route to navigate to
    this.router.navigate(['/ru106']);
  }

  ngOnInit(): void {
  }

}
