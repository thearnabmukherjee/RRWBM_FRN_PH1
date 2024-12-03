import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlantService } from '../../../Services/plant.service';

@Component({
  selector: 'app-view-plant',
  templateUrl: './view-plant.component.html',
  styleUrls: ['./view-plant.component.scss']
})
export class ViewPlantComponent implements OnInit {

  savedData: any[] = [];
  searchResults: any[] = [];

  constructor(private plantService: PlantService, private router: Router) { }

  ngOnInit(): void {
    this.plantService.getData().subscribe(data => {
      this.savedData = data;
      this.searchResults = [...this.savedData]; // Initialize search results to show all data by default
    });
  }

  onSearchResults(results: any[]) {
    this.searchResults = results;
  }

  // editItem(itemId: string) {
  //   // Navigate to the edit page with the item ID as a query parameter
  //   this.router.navigate(['/edit'], { queryParams: { id: itemId } });
  // }

  deleteData(data: any) {
    // Implement logic to delete the selected record using the service
    this.plantService.deleteData(data);
  }

}
