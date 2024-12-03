import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

    interface exuse 
    {
    name: string;
    firstname: string;
    lastname: string;
    email: string;
    }


    @Component({
    selector: 'app-user-management',
    templateUrl: './user-management.component.html',
    styleUrl: './user-management.component.scss'
    })
    export class UserManagementComponent implements OnInit
 {
    geometries: exuse[] = [
        { name: 'arnab11am', firstname: 'Arnab', lastname: 'Mukherjee', email: 'arnab11mukherjeeam@gmail.com' },
        { name: 'vaishnavivs07', firstname: 'Vaishnavi', lastname: 'Sawant', email: 'vaishnavisawant1011@gmail.com' },
        { name: 'suheetss010', firstname: 'Suheet', lastname: 'Sonavane', email: 'suheetss0101cha@gmail.com' },
        { name: 'root', firstname: 'root', lastname: 'test', email: 'testroot@gmail.com' },
    ];

    constructor(private router: Router) {}

    go_to_Roles() {
      // Navigate to the homepage
      this.router.navigate(['/roles']);
    }

    ngOnInit(): void
    {
    }
 }
