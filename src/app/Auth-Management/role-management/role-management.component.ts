import { Component, OnInit } from '@angular/core';

interface Roles {
  id: string;
  role: string;
  roleassigned: string;
}

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {
  arr_roles: Roles[] = [
    { id: '1', role: 'root', roleassigned: 'SuperUser,Admin,Technician,Employee,Contract Worker,OICD1,OICD2,Health Physicist,Officer' },
    { id: '2', role: 'arnab11am', roleassigned: 'Admin,Technician,Employee' },
    { id: '3', role: 'vaishnavivs07', roleassigned: 'SuperUser,Admin,Technician,Employee,Contract Worker,OICD1,OICD2,Health Physicist,Officer' },
    { id: '4', role: 'suheetss010', roleassigned: 'SuperUser,Employee,Health Physicist,Officer' },
  ];

  isModalActive = false;
  selectedRoles = {
   superuser:false,
   admin:false,
   hp:false,
   oicd1:false,
   oicd2:false,
   technician:false,
   employee:false,
   contract:false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.isModalActive = true;
  }

  closeModal(): void {
    this.isModalActive = false;
  }

  confirmSelection(): void {
    console.log('Selected roles:', this.selectedRoles);
    this.closeModal();
  }
}
