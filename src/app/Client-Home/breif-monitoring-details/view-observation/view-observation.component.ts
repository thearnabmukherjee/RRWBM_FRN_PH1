import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkerService } from '../../../../Services/worker.service';

@Component({
  selector: 'app-view-observation',
  templateUrl: './view-observation.component.html',
  styleUrls: ['./view-observation.component.scss']
})
export class ViewObservationComponent implements OnInit {
  @Input() empNo: string = '';
  observations: any[] = [];
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(private workerService: WorkerService) {}

  ngOnInit(): void {
    this.workerService.getObservations(this.empNo).subscribe(data => {
      this.observations = data;
    });
  }

  viewDetails(observation: any) {
    // Logic to view detailed information for the observation
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
}
