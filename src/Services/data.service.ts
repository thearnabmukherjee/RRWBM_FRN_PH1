import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[] = [];

  constructor() {}

  saveData(newData: any) {
    this.data.push(newData);
  }

  updateData(index: number, updatedData: any) {
    this.data[index] = updatedData;
  }

  getData() {
    return this.data;
  }
}
