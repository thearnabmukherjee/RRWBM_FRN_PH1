import { Component, OnInit } from '@angular/core';
import { TldService } from '../../../Services/tld.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-tld',
  templateUrl: './view-tld.component.html',
  styleUrls: ['./view-tld.component.scss']
})
export class ViewTldComponent  implements OnInit {

  savedData: any[] = [];
  searchResults: any[] = [];

  constructor(private tldService: TldService, private router: Router) { }

  ngOnInit(): void {
    this.tldService.getData().subscribe(data => {
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
    this.tldService.deleteData(data);
  }

}
