// src/app/manualanalysis/manualanalysis.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from '../../../../Services/worker.service';

@Component({
  selector: 'app-manualanalysis',
  templateUrl: './manualanalysis.component.html',
  styleUrls: ['./manualanalysis.component.scss']
})
export class ManualanalysisComponent implements OnInit {
  empNo: string = '';
  name: string = '';
  observations: any[] = [];

  constructor(private route: ActivatedRoute, private workerService: WorkerService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.empNo = params['empNo'];
      this.name = params['name'];
      if (this.empNo) {
        this.workerService.getObservations(this.empNo).subscribe(data => {
          this.observations = data;
        });
      }
    });
  }
}
