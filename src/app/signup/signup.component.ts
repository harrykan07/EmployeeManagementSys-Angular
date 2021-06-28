import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  cities:string[]=['Hyderabad','Vijayawada','Vizag','Tirupathi','Bangalore']
  msg:string=''

  constructor(private eservice:EmployeeService) { }

  ngOnInit(): void {
    
  }

  employeeModel=new Employee(0,"","");

  handleSubmit()
  {
   this.eservice.saveEmployee(this.employeeModel).subscribe(
     data=>
     {
      this.msg=data
      this.employeeModel=new Employee(0,"","")
     }
   )
  }

}
