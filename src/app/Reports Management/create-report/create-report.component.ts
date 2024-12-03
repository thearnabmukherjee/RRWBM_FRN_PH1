import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../Services/reports.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {
  

  isModalOpen: boolean = false;
  
  
  reportData = {
    name:'',
    stdate:'',
    eddate:'',
    plant:'',
    division:'',
    montype:'',
    cron:'',
    crby:'',
  };

  
  successMessage: boolean = false;

  constructor(private reportsService: ReportsService ) {}

// Function to open the modal
openModal() {
  this.isModalOpen = true;
}

// Function to close the modal
closeModal() {
  this.isModalOpen = false;
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.reportsService.saveData(this.reportData);
    this.reportData = {
    name:'',
    stdate:'',
    eddate:'',
    plant:'',
    division:'',
    montype:'',
    cron:'',
    crby:'',
    };
  }

  showSuccessMessage() {
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 3000); 
  }


}
