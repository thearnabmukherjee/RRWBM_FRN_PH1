import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface com8{
  name: string;
}

@Component({
  selector: 'app-eighthcom',
  templateUrl: './eighthcom.component.html',
  styleUrls: ['./eighthcom.component.scss']
})
export class EighthcomComponent  implements OnInit {
  geometries: com8[] = [
     { name: ' No dose analysis records found!! ' },
    
  ];

  constructor(private router: Router){}
  navigateToCertainPage() {
    // Add the specific route to navigate to
    this.router.navigate(['/sc46']);
  }

  ngOnInit(): void {
  }

}

