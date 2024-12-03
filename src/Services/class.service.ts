import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private savedDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private selectedDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() { }

  saveData(data: any) {
    const currentData = this.savedDataSubject.getValue();
    this.savedDataSubject.next([...currentData, data]);
  }

  getData(): Observable<any[]> {
    return this.savedDataSubject.asObservable();
  }

  setSelectedData(data: any) {
    this.selectedDataSubject.next(data);
  }

  getSelectedData(): Observable<any> {
    return this.selectedDataSubject.asObservable();
  }

  updateData(updatedData: any) {
    const currentData = this.savedDataSubject.getValue();
    const index = currentData.findIndex(item => item === this.selectedDataSubject.getValue());
    if (index !== -1) {
      currentData[index] = updatedData;
      this.savedDataSubject.next([...currentData]);
    }
  }

  selectData(data: any) {
    this.selectedDataSubject.next(data);
  }

  deleteData(data: any) {
    const currentData = this.savedDataSubject.getValue();
    const newData = currentData.filter(item => item !== data);
    this.savedDataSubject.next(newData);
  }
}




