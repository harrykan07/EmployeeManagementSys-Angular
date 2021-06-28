import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit {

  employees:Employee[]=[]
  msg:string=''
  
  constructor(private eservice:EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }


  getAllEmployees()
  {
    this.eservice.getAllEmployees().subscribe(data=>
      {
        this.employees=data
      })
  }

  deleteEmployee(eid:number)
  {
    this.eservice.deleteEmployee(eid).subscribe(data=>
      {
        this.msg=data
        this.getAllEmployees()

      })
  }

  editEmployee(eid:number)
  {
      this.router.navigate(['edit-employee',eid]);
  }

}
