import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RadionuclideService } from '../../../Services/radionuclide.service';

@Component({
  selector: 'app-view-radionuclide',
  templateUrl: './view-radionuclide.component.html',
  styleUrls: ['./view-radionuclide.component.scss']
})
export class ViewRadionuclideComponent implements OnInit {

  savedData: any[] = [];
  searchResults: any[] = [];

  constructor(private radionuclideService: RadionuclideService, private router: Router) { }

  ngOnInit(): void {
    this.radionuclideService.getData().subscribe(data => {
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
    this.radionuclideService.deleteData(data);
  }

}
