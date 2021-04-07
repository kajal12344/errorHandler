import { IEmployee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';



@Component({
  selector: 'app-employee-details',
  template: `
  <h1> Employee List </h1>
  <h1> {{errorMessage}} </h1>
<table border="1" cellpadding="3" id="printTable">
    <tbody><tr>
        <th>Employee Name</th>
        <th>Employee City</th>
    </tr>
    <tr *ngFor = "let emp of employees">
        <td>{{emp.Name}}</td>
        <td>{{emp.City}}</td>
    </tr>
</tbody></table>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
public employees:any = [];
public errorMessage = "";
  constructor(private emp:EmployeeServiceService) {
   }

  ngOnInit() {
     this.emp.getEmployee().subscribe(data => this.employees = data,
                                      error => this.errorMessage = error);
  }

}
