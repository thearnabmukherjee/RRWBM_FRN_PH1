import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../Services/data.service';

@Component({
  selector: 'app-create10-h',
  templateUrl: './create10-h.component.html',
  styleUrls: ['./create10-h.component.scss']
})
export class Create10HComponent implements OnInit {
  interests: string[] = ['Sports', 'Music', 'Travel', 'Reading'];
  formData = {
    plant: '',
    doctor: '',
    type: '',
    name: '',
    tld: '',
    compcode: '',
    empno: '',
    weight: '',
    height: '',
    chest: '',
    mondate: '',
    proopt: '',
    geometry:'',
    monty: '',
    exposuredt: '',
    description: '',
    intake: {
      inhalation: false,
      injestion: false,
      injection: false
    },
    contaminants: {
      i131: false,
      cs137: false,
      co60: false,
      sc46: false,
      ru106: false,
    },
    iodt: '',
    particle: '',
    theraputictreatment: '',
    isocontaminants: '',
    puam: '',
    samplecol: '',
    samplecol1: '',
    prevmon: '',
    comments: '',
    dob: '',
    doj: '',
    age: null,
    gender: '',
    radion: '',
    email: '',
  };

  editMode = false;
  editIndex: number | null = null;
  successMessage: boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['editIndex'] !== undefined) {
        this.editIndex = +params['editIndex'];
        this.formData = { ...this.dataService.getData()[this.editIndex] };
        this.editMode = true;
      }
    });
  }

  onSubmit() {
    if (this.editMode && this.editIndex !== null) {
      this.dataService.updateData(this.editIndex, this.formData);
      this.editMode = false;
      this.editIndex = null;
    } else {
      this.dataService.saveData(this.formData);
    }
    this.resetForm();
    this.showSuccessMessage();
  }

  resetForm() {
    this.formData = {
      plant: '',
      doctor: '',
      type: '',
      name: '',
      tld: '',
      compcode: '',
      empno: '',
      weight: '',
      height: '',
      chest: '',
      mondate: '',
      proopt: '',
      geometry:'',
      monty: '',
      exposuredt: '',
      description: '',
      intake: {
        inhalation: false,
        injestion: false,
        injection: false
      },
      contaminants: {
        i131: false,
        cs137: false,
        co60: false,
        sc46: false,
        ru106: false,
      },
      iodt: '',
      particle: '',
      theraputictreatment: '',
      isocontaminants: '',
      puam: '',
      samplecol: '',
      samplecol1: '',
      prevmon: '',
      comments: '',
      dob: '',
      doj: '',
      age: null,
      gender: '',
      radion: '',
      email: '',
    };
  }

  showSuccessMessage() {
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 3000); 
  }
}
