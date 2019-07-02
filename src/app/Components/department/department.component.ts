import { Component, OnInit } from '@angular/core';
import { DepartmentLoaderService } from "../../Services/DepartmentLoader.service";
import { Department} from "../../Models/Department";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: Department[];
  
  constructor(private connectionService: DepartmentLoaderService){}

  ngOnInit():void{
     this.connectionService.getDepartment().subscribe(
       newDepartments => {
         this.departments = newDepartments
         console.log(this.departments)
        },
       error => console.log(error)
     );
  };
}
