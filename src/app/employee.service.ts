import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  baseUrl:string='http://localhost:8080/employees'

 //making a call to api ,and getting all employees
 getAllEmployees():Observable<Employee[]>
 {
    return this.http.get<Employee[]>(`${this.baseUrl}/allEmployees`)
 }

 saveEmployee(employee:Employee)
 {
    return this.http.post(`${this.baseUrl}/saveEmployee`,employee,{responseType:'text'});
 }

 deleteEmployee(eid:number)
  {
      return this.http.delete(`${this.baseUrl}/deleteSingleEmployee/${eid}`,{responseType:'text'});
  }
 
 getEmployeeById(eid:Number): Observable<Employee>
 {
   return this.http.get<Employee>(`${this.baseUrl}/getSingleEmployee/${eid}`)
 }

 updateEmployee(eid: number, employee: Employee)
 {
   return this.http.put(`${this.baseUrl}/updateEmployee/${eid}`,employee);
 }

}
