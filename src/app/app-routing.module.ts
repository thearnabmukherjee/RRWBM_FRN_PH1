import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Create10HComponent } from './H10/create10-h/create10-h.component';
import { View10HComponent } from './H10/view10-h/view10-h.component';

import { CreateReportComponent } from './Reports Management/create-report/create-report.component';
import { ViewReportComponent } from './Reports Management/view-report/view-report.component';
import { WorkersListComponent } from './Client-Home/workers-list/workers-list.component';
import { SearchComponent } from './search/search.component';
import { ViewGeometryComponent } from './Geometry-Management/view-geometry/view-geometry.component';
import { CreateGeometryComponent } from './Geometry-Management/create-geometry/create-geometry.component';
import { CreateClassComponent } from './Class-Management/create-class/create-class.component';
import { ViewClassComponent } from './Class-Management/view-class/view-class.component';
import { CreateIntakerouteComponent } from './Intake-route-management/create-intakeroute/create-intakeroute.component';
import { ViewIntakerouteComponent } from './Intake-route-management/view-intakeroute/view-intakeroute.component';
import { ViewRadionuclideComponent } from './RadioNuclide Management/view-radionuclide/view-radionuclide.component';
import { CreateRadionuclideComponent } from './RadioNuclide Management/create-radionuclide/create-radionuclide.component';
import { CreateDivisionComponent } from './Division management/create-division/create-division.component';
import { ViewDivisionComponent } from './Division management/view-division/view-division.component';
import { ViewPlantComponent } from './Plant Management/view-plant/view-plant.component';
import { CreatePlantComponent } from './Plant Management/create-plant/create-plant.component';
import { ViewTldComponent } from './tld-management/view-tld/view-tld.component';
import { CreateTldComponent } from './tld-management/create-tld/create-tld.component';
import { ViewObservationComponent } from './Client-Home/breif-monitoring-details/view-observation/view-observation.component';
import { Ar41Component } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/ar41/ar41.component';
import { Ar41viewComponent } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/ar41view/ar41view.component';
import { Co60Component } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/co60/co60.component';
import { Co60viewComponent } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/co60view/co60view.component';
import { Cs137Component } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/cs137/cs137.component';
import { Cs137viewComponent } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/cs137view/cs137view.component';
import { I131Component } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/i131/i131.component';
import { I131viewComponent } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/i131view/i131view.component';
import { K40Component } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/k40/k40.component';
import { K40viewComponent } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/k40view/k40view.component';
import { Ru106Component } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/ru106/ru106.component';
import { Sc46Component } from './Client-Home/breif-monitoring-details/manualanalysis/dose_analysis/sc46/sc46.component';
import { ManualanalysisComponent } from './Client-Home/breif-monitoring-details/manualanalysis/manualanalysis.component';
import { BreifMonitoringDetailsComponent } from './Client-Home/breif-monitoring-details/breif-monitoring-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../Services/auth.guard';
import { UserManagementComponent } from './Auth-Management/user-management/user-management.component';
import { RoleManagementComponent } from './Auth-Management/role-management/role-management.component';
import { PermissionManagementComponent } from './Auth-Management/permission-management/permission-management.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { HpManagementComponent } from './Auth-Management/hp-management/hp-management.component';
import { Schedule10HComponent } from './H10/schedule10-h/schedule10-h.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}, // Redirect to login by default
  { 
    path: '',
    // canActivate: [AuthGuard],
    children: [
  { path: 'homemain',component: HomeMainComponent},
  { path: 'create10-h', component: Create10HComponent},
  { path: 'view10-h', component: View10HComponent},
  { path: 'schedule', component: Schedule10HComponent},
  { path: 'view-observation', component: ViewObservationComponent},
  { path: 'create-report', component: CreateReportComponent},
  { path: 'view-report', component: ViewReportComponent},
  { path: 'workers-list', component: WorkersListComponent},
  { path: 'search', component: SearchComponent},
  { path: 'view-geometry', component: ViewGeometryComponent},
  { path: 'create-geometry', component: CreateGeometryComponent},
  { path: 'view-class', component: ViewClassComponent},
  { path: 'create-class', component: CreateClassComponent},
  { path: 'view-intakeroute', component: ViewIntakerouteComponent},
  { path: 'create-intakeroute', component: CreateIntakerouteComponent},
  { path: 'view-radionuclide', component: ViewRadionuclideComponent},
  { path: 'create-radionuclide', component: CreateRadionuclideComponent},
  { path: 'view-division', component: ViewDivisionComponent},
  { path: 'create-division', component: CreateDivisionComponent},
  { path: 'view-plant', component: ViewPlantComponent},
  { path: 'create-plant', component: CreatePlantComponent},
  { path: 'view-tld', component: ViewTldComponent},
  { path: 'create-tld', component: CreateTldComponent},
  { path: '', redirectTo: '/breif-monitoring-details', pathMatch: 'full' },
  { path: 'breif-monitoring-details', component: BreifMonitoringDetailsComponent },
  { path: 'manualanalysis',component: ManualanalysisComponent},
  { path: 'i131',component: I131Component},
  { path: 'i131view',component: I131viewComponent},
  { path: 'cs137',component: Cs137Component},
  { path: 'cs137view',component: Cs137viewComponent},
  { path: 'co60',component: Co60Component},
  { path: 'co60view',component: Co60viewComponent},
  { path: 'k40',component: K40Component},
  { path: 'k40view',component: K40viewComponent},
  { path: 'ar41',component: Ar41Component},
  { path: 'ar41view',component: Ar41viewComponent},
  { path: 'sc46',component: Sc46Component},
  { path: 'ru106',component: Ru106Component},
  { path: 'users',component: UserManagementComponent},
  { path: 'roles',component: RoleManagementComponent},
  { path: 'permission',component: PermissionManagementComponent},
  { path: 'hp',component: HpManagementComponent},
  

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
