// src/app/services/worker.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private selectedWorkerSubject = new Subject<any>();
  selectedWorker$ = this.selectedWorkerSubject.asObservable();

  selectWorker(worker: any) {
    this.selectedWorkerSubject.next(worker);
  }

getObservations(empNo: string): Observable<any[]> {
  // Mocked data, replace with actual API call
  const observations = [
    { radionuclide: 'I-131', activity: 'BDL', intake: '< RL', ced: '< RL', creation: '07-03-2024' },
    { radionuclide: 'Cs-137', activity: 'BDL', intake: '< RL', ced: '< RL', creation: '07-03-2024' },
    { radionuclide: 'Co-60', activity: 'BDL', intake: '< RL', ced: '< RL', creation: '07-03-2024' },
    { radionuclide: 'K-40', activity: '4.37E+00', intake: '-1.00E-03', ced: '-1.00E+03', creation: '07-03-2024' }
  ];
  return of(observations);
}
}