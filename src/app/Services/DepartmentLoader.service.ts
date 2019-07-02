import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Department } from "../Models/Department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentLoaderService {

constructor(private httpClient: HttpClient) { }

private url = "https://localhost:44336/api/Departments"
public getDepartment():Observable<Department[]>{
  return this.httpClient.get<Department[]>(this.url)
}

}
