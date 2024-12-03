
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() data: any[] = [];
  @Input() searchKey: string = '';
  @Input() isShowStartDate: boolean = true;
  @Input() isShowEndDate: boolean = true;

  @Output() results = new EventEmitter<any[]>();

  searchVal: string = '';
  startDate: string = '';
  endDate: string = '';
  searchResults: any[] = [];
  showResults: boolean = false;

  onSearch() {
    if (this.searchKey && this.data.length > 0) {
      this.searchResults = this.data.filter(item => {
        const matchesSearchVal = item[this.searchKey].toLowerCase().includes(this.searchVal.toLowerCase());
        const matchesStartDate = this.isShowStartDate && this.startDate ? new Date(item.startDate) >= new Date(this.startDate) : true;
        const matchesEndDate = this.isShowEndDate && this.endDate ? new Date(item.endDate) <= new Date(this.endDate) : true;
        return matchesSearchVal && matchesStartDate && matchesEndDate;
      });
      this.showResults = true;
      this.results.emit(this.searchResults);
    }
  }
}
