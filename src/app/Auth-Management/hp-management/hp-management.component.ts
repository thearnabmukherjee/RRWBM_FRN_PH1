import { Component, OnInit } from '@angular/core';

interface health 
{
  name: string;
  plant: string;
  email: string;
  createdon: string;
  createdby:string;
}

@Component({
  selector: 'app-hp-management',
  templateUrl: './hp-management.component.html',
  styleUrl: './hp-management.component.scss'
})
export class HpManagementComponent implements OnInit {
  geometries: health[] = [
    { name: 'Arnab', plant: 'Cyrus', email: 'arnab11mukherjeeam@gmail.com',createdon: '2023-o3-23 11:11:11',createdby:'suwbm' },
    { name: 'Vaishnavi', plant: 'DHURVA', email: 'vaishnavisawant1011@gmail.com',createdon: '2024-o3-24 10:11:12',createdby:'suwbm' },
    { name: 'Amit BHatnagar', plant: 'PP', email: 'bamit@barc.gov.in',createdon: '2024-o2-23 11:11:11',createdby:'suwbm' },
    { name: 'Anjan Kumar Singh', plant: 'ETP', email: 'etpanjam@barc.gov.in',createdon: '2021-o9-13 09:19:23',createdby:'suwbm' },
    { name: 'Ashok Kumar P', plant: 'ISOTOPE WING,RLG', email: 'ashokkp@barc.gov.in',createdon: '2019-11-01 13:50:54',createdby:'suwbm' },
    
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
