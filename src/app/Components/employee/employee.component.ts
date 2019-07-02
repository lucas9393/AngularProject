import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeLoaderService } from 'src/app/Services/EmployeeLoader.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  
  constructor(private connectionService: EmployeeLoaderService){}

  ngOnInit():void{
     this.connectionService.getEmployee().subscribe(
       newEmployee => {
         this.employees = newEmployee
         console.log(this.employees)
        },
       error => console.log(error)
     );
  };
}
