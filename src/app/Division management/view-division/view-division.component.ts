import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DivisionService } from '../../../Services/division.service';

@Component({
  selector: 'app-view-division',
  templateUrl: './view-division.component.html',
  styleUrls: ['./view-division.component.scss']
})
export class ViewDivisionComponent implements OnInit {

  savedData: any[] = [];
  searchResults: any[] = [];

  constructor(private divisionService: DivisionService, private router: Router) { }

  ngOnInit(): void {
    this.divisionService.getData().subscribe(data => {
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
    this.divisionService.deleteData(data);
  }

}
