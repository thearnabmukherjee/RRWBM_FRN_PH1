import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

    interface permission
    {
    id: string;
    desc: string;
    }



@Component({
  selector: 'app-permission-management',
  templateUrl: './permission-management.component.html',
  styleUrl: './permission-management.component.scss'
})
export class PermissionManagementComponent implements OnInit
{
   geometries: permission[] = [
       { id: '1', desc: 'Create_10H', },
       { id: '2', desc: 'View_10h', },
       { id: '3', desc: 'Generate_10h', },
       { id: '4', desc: 'Create_Reports', },
       { id: '5', desc: 'View_Reports', },
       { id: '6', desc: 'Generate_Report', },
       { id: '7', desc: 'Create_Class', },
       { id: '8', desc: 'View_Class', },
       { id: '9', desc: 'Create_Intake_Route', },
       { id: '10', desc: 'View_Intake_Route', },
       { id: '11', desc: 'Generate_Geometry', },
       { id: '12', desc: 'View_Geometry', },
       { id: '13', desc: 'Create_RadioNuclide', },
       { id: '14', desc: 'View_RadioNuclide', },
       { id: '15', desc: 'Create_TLD', },
       { id: '16', desc: 'View_TLD', },
       { id: '17', desc: 'Client_Home', },
       { id: '18', desc: 'Clint_List', },
       { id: '19', desc: 'Monitor_Box', },
       { id: '20', desc: 'Observaion_Box', },
       { id: '21', desc: 'Manual_Analysis_Box', },
       { id: '22', desc: 'Schedule_Appointment_Page', },
       { id: '23', desc: 'Register_Client_Page', },
       { id: '24', desc: 'Picture_INT_Page', },
       { id: '25', desc: 'HPD_reg_Page', },
       

       
       




    
   ];

   ngOnInit(): void
   {
   }
}
