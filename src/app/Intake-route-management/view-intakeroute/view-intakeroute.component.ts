import { Component, OnInit } from '@angular/core';
import { IntakeRouteService } from '../../../Services/intake-route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-intakeroute',
  templateUrl: './view-intakeroute.component.html',
  styleUrls: ['./view-intakeroute.component.scss']
})
export class ViewIntakerouteComponent implements OnInit {

  savedData: any[] = [];
  searchResults: any[] = [];

  constructor(private inatkerouteService: IntakeRouteService, private router: Router) { }

  ngOnInit(): void {
    this.inatkerouteService.getData().subscribe(data => {
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
    this.inatkerouteService.deleteData(data);
  }

}
