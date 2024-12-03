import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeometryService } from '../../../Services/geometry.service';

@Component({
  selector: 'app-view-geometry',
  templateUrl: './view-geometry.component.html',
  styleUrls: ['./view-geometry.component.scss']
})
export class ViewGeometryComponent implements OnInit {

  savedData: any[] = [];
  searchResults: any[] = [];

  constructor(private geometryService: GeometryService, private router: Router) { }

  ngOnInit(): void {
    this.geometryService.getData().subscribe(data => {
      this.savedData = data;
      this.searchResults = [...this.savedData]; // Initialize search results to show all data by default
    });
  }

  onSearchResults(results: any[]) {
    this.searchResults = results;
  }

  editItem(itemId: string) {
    // Navigate to the edit page with the item ID as a query parameter
    this.router.navigate(['/edit'], { queryParams: { id: itemId } });
  }

  deleteData(data: any) {
    // Implement logic to delete the selected record using the service
    this.geometryService.deleteData(data);
  }

}
