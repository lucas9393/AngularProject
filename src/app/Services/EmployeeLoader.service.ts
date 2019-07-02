import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../Models/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoaderService {

constructor(private httpClient: HttpClient) { }

private url = "https://localhost:44336/api/Employees"
public getEmployee():Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(this.url)
}


}
