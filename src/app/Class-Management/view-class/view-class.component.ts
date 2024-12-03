import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from '../../../Services/class.service';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.scss']
})
export class ViewClassComponent implements OnInit {

  savedData: any[] = [];
  searchResults: any[] = [];

  constructor(private classService: ClassService, private router: Router) { }

  ngOnInit(): void {
    this.classService.getData().subscribe(data => {
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
    this.classService.deleteData(data);
  }

}
