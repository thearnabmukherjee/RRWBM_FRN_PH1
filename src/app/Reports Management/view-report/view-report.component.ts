import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../../Services/reports.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss']
})
export class ViewReportComponent  implements OnInit {

  savedData: any[] = [];
  searchResults: any[] = [];

  constructor(private reportsService: ReportsService, private router: Router) { }

  ngOnInit(): void {
    this.reportsService.getData().subscribe(data => {
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
    this.reportsService.deleteData(data);
  }

}
