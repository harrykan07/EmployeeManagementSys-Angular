import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id: number = 0;
  employeeModel=new Employee(0,"","");
  cities:string[]=['Hyderabad','Vijayawada','Vizag','Tirupathi','Bangalore']
  msg:string=''
  constructor(private eservice:EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.eservice.getEmployeeById(this.id).subscribe(
      data =>
      {
        this.employeeModel = data;
      },error => console.log(error));
  }


  handleSubmit()
  {
   this.eservice.updateEmployee(this.id,this.employeeModel).subscribe(
     data=>
     {
      this.msg=data.toString();
      this.getAllEmployees();
     }
     , error => console.log(error));
  }

  getAllEmployees()
  {
    this.router.navigate(['/allEmployees']);
  }

}

