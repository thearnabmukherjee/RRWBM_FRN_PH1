import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../Services/data.service';

@Component({
  selector: 'app-view10-h',
  templateUrl: './view10-h.component.html',
  styleUrls: ['./view10-h.component.scss']
})
export class View10HComponent implements OnInit {

  savedData: any[] = [];
  searchResults: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }
  
  go_to_schedule()
  {
    this.router.navigate(['/schedule'])
  }
  ngOnInit(): void {
    this.savedData = this.dataService.getData();
    this.searchResults = this.savedData.slice(); // Initialize search results to show all data by default
  }

  getSelectedContaminants(contaminants: any) {
    const selectedKeys = Object.keys(contaminants).filter(key => contaminants[key]);
    return { keys: selectedKeys, lastKey: selectedKeys[selectedKeys.length - 1] };
  }

  getSelectedIntakes(intake: any) {
    const selectedKeys = Object.keys(intake).filter(key => intake[key]);
    return { keys: selectedKeys, lastKey: selectedKeys[selectedKeys.length - 1] };
  }

  editItem(index: number) {
    this.router.navigate(['/create10-h'], { queryParams: { editIndex: index } });
  }

  onSearchResults(results: any[]) {
    this.searchResults = results;
  }

  deleteData(data: any) {
    const index = this.savedData.indexOf(data);
    if (index !== -1) {
      this.savedData.splice(index, 1);
      this.onSearchResults(this.savedData);
    }
  }
}
