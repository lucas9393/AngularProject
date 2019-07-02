import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";

import { DepartmentComponent } from "./Components/department/department.component";

import { EmployeeComponent } from "./Components/employee/employee.component";

@NgModule({
   declarations: [
      AppComponent,
      DepartmentComponent,
      EmployeeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
