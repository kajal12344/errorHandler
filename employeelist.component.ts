import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  template: `
    <h1> Employee List </h1>

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
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees = [
    {"id":"1","Name":"Kajal","City":"Satara"},
    {"id":"2","Name":"Piyu","City":"Pune"},
    {"id":"3","Name":"Nirmala","City":"Sangali"},
    {"id":"4","Name":"Indu","City":"Pali"},
    {"id":"5","Name":"Gopi","City":"Kolhapur"}
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
