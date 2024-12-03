import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Create10HComponent } from './H10/create10-h/create10-h.component';
import { View10HComponent } from './H10/view10-h/view10-h.component';

import { CreateReportComponent } from './Reports Management/create-report/create-report.component';
import { ViewReportComponent } from './Reports Management/view-report/view-report.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WorkersListComponent } from './Client-Home/workers-list/workers-list.component';
import { SearchComponent } from './search/search.component';
import { CreateGeometryComponent } from './Geometry-Management/create-geometry/create-geometry.component';
import { ViewGeometryComponent } from './Geometry-Management/view-geometry/view-geometry.component';
import { CreateClassComponent } from './Class-Management/create-class/create-class.component';
import { ViewClassComponent } from './Class-Management/view-class/view-class.component';
import { CreateIntakerouteComponent } from './Intake-route-management/create-intakeroute/create-intakeroute.component';
import { ViewIntakerouteComponent } from './Intake-route-management/view-intakeroute/view-intakeroute.component';
import { CreateRadionuclideComponent } from './RadioNuclide Management/create-radionuclide/create-radionuclide.component';
import { ViewRadionuclideComponent } from './RadioNuclide Management/view-radionuclide/view-radionuclide.component';
import { CreateDivisionComponent } from './Division management/create-division/create-division.component';
import { ViewDivisionComponent } from './Division management/view-division/view-division.component';
import { CreatePlantComponent } from './Plant Management/create-plant/create-plant.component';
import { ViewPlantComponent } from './Plant Management/view-plant/view-plant.component';
import { ViewTldComponent } from './tld-management/view-tld/view-tld.component';
import { CreateTldComponent } from './tld-management/create-tld/create-tld.component';
import { BreifMonitoringDetailsComponent } from './Client-Home/breif-monitoring-details/breif-monitoring-details.component';
import { ViewObservationComponent } from './Client-Home/breif-monitoring-details/view-observation/view-observation.component';
import { FifthcomComponent } from './Client-Home/breif-monitoring-details/manualanalysis/ROIs__Specified/fifthcom/fifthcom.component';
import { FourthcomComponent } from './Client-Home/breif-monitoring-details/manualanalysis/ROIs__Specified/fourthcom/fourthcom.component';
import { SecondcomComponent } from './Client-Home/breif-monitoring-details/manualanalysis/ROIs__Specified/secondcom/secondcom.component';
import { SixthcomComponent } from './Client-Home/breif-monitoring-details/manualanalysis/ROIs__Specified/sixthcom/sixthcom.component';
import { ThirdcomComponent } from './Client-Home/breif-monitoring-details/manualanalysis/ROIs__Specified/thirdcom/thirdcom.component';
import { EighthcomComponent } from './Client-Home/breif-monitoring-details/manualanalysis/ROIs__Unspecified/eighthcom/eighthcom.component';
import { SeventhcomComponent } from './Client-Home/breif-monitoring-details/manualanalysis/ROIs__Unspecified/seventhcom/seventhcom.component';
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
import { FirstcomComponent } from './Client-Home/breif-monitoring-details/manualanalysis/firstcom/firstcom.component';
import { ManualanalysisComponent } from './Client-Home/breif-monitoring-details/manualanalysis/manualanalysis.component';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './Auth-Management/user-management/user-management.component';
import { RoleManagementComponent } from './Auth-Management/role-management/role-management.component';
import { PermissionManagementComponent } from './Auth-Management/permission-management/permission-management.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { HpManagementComponent } from './Auth-Management/hp-management/hp-management.component';
import { Schedule10HComponent } from './H10/schedule10-h/schedule10-h.component';





@NgModule({
  declarations: [
    AppComponent,
    Create10HComponent,
    View10HComponent,
    CreateReportComponent,
    ViewReportComponent,
    WorkersListComponent,
    SearchComponent,
    CreateGeometryComponent,
    ViewGeometryComponent,
    CreateClassComponent,
    ViewClassComponent,
    CreateIntakerouteComponent,
    ViewIntakerouteComponent,
    CreateRadionuclideComponent,
    ViewRadionuclideComponent,
    CreateDivisionComponent,
    ViewDivisionComponent,
    CreatePlantComponent,
    ViewPlantComponent,
    ViewTldComponent,
    CreateTldComponent,
    BreifMonitoringDetailsComponent,
    ViewObservationComponent,
    ManualanalysisComponent,
    FirstcomComponent,
    SecondcomComponent,
    ThirdcomComponent,
    FourthcomComponent,
    FifthcomComponent,
    SixthcomComponent,
    SeventhcomComponent,
    EighthcomComponent,
    I131Component,
    I131viewComponent,
    Cs137Component,
    Cs137viewComponent,
    Co60Component,
    Co60viewComponent,
    K40viewComponent,
    K40Component,
    Ar41Component,
    Ar41viewComponent,
    Sc46Component,
    Ru106Component,
    LoginComponent,
    UserManagementComponent,
    RoleManagementComponent,
    PermissionManagementComponent,
    HomeMainComponent,
    HpManagementComponent,
    Schedule10HComponent,
   
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
