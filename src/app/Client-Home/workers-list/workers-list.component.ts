
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../Services/data.service';
import { Router } from '@angular/router';
import { WorkerService } from '../../../Services/worker.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent implements OnInit {

  savedData: any[] = [];
  formData: any = {};
  filteredData: any[] = [];
  searchResults: any[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private workerService: WorkerService
  ) {}

  ngOnInit(): void {
    this.savedData = this.dataService.getData();
    this.filteredData = this.savedData.slice();
    this.searchResults = this.filteredData.slice(); // Initialize searchResults with all data
  }

  onSearchResults(results: any[]) {
    this.searchResults = results.length ? results : this.filteredData; // Update searchResults or fallback to all data
  }

  editItem(itemId: string) {
    this.router.navigate(['/edit10-h'], { queryParams: { id: itemId } });
  }

  deleteData(data: any) {
    const index = this.savedData.indexOf(data);
    if (index !== -1) {
      this.savedData.splice(index, 1);
      this.searchResults = this.savedData.slice(); // Update searchResults after deletion
    }
  }

  selectWorker(worker: any) {
    this.workerService.selectWorker(worker);
  }
}