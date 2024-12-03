// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { WorkerService } from '../../../Services/worker.service';

// @Component({
//   selector: 'app-breif-monitoring-details',
//   templateUrl: './breif-monitoring-details.component.html',
//   styleUrls: ['./breif-monitoring-details.component.scss']
// })
// export class BreifMonitoringDetailsComponent implements OnInit {

//   selectedWorker: any;
//   isObservationModalOpen: boolean = false;

//   constructor(
//     private router: Router,
//     private workerService: WorkerService
//   ) { }

//   ngOnInit(): void {
//     this.workerService.selectedWorker$.subscribe(worker => {
//       this.selectedWorker = worker;
//     });
//   }

//   openObservationModal() {
//     this.isObservationModalOpen = true;
//   }

//   closeObservationModal() {
//     this.isObservationModalOpen = false;
//   }

//   navigateToObservation() {
//     this.router.navigate(['/view-observation']);
//   }

//   navigateToSpectrum() {
//     this.router.navigate(['/manualanalysis']);
//   }

//   navigateToAnalysis() {
//     this.router.navigate(['/doseana']);
//   }

//   navigateToSets() {
//     this.router.navigate(['/Sets']);
//   }

//   navigateToRecall() {
//     this.router.navigate(['/recall']);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../../../Services/worker.service';

@Component({
  selector: 'app-breif-monitoring-details',
  templateUrl: './breif-monitoring-details.component.html',
  styleUrls: ['./breif-monitoring-details.component.scss']
})
export class BreifMonitoringDetailsComponent implements OnInit {

  selectedWorker: any;
  isObservationModalOpen: boolean = false;

  constructor(
    private router: Router,
    private workerService: WorkerService
  ) { }

  ngOnInit(): void {
    this.workerService.selectedWorker$.subscribe(worker => {
      this.selectedWorker = worker;
    });
  }

  openObservationModal() {
    this.isObservationModalOpen = true;
  }

  closeObservationModal() {
    this.isObservationModalOpen = false;
  }
  

  navigate_To_Analysis() {
    this.workerService.selectWorker(this.selectedWorker);
    this.router.navigate(['/manualanalysis'], {
      queryParams: {
        empNo: this.selectedWorker.empno,
        name: this.selectedWorker.name
      }
    });
  }

  navigateToSpectrum() {
    this.router.navigate(['/doseana']);
  }

  navigateToSets() {
    this.router.navigate(['/Sets']);
  }

  navigateToRecall() {
    this.router.navigate(['/recall']);
  }
}
