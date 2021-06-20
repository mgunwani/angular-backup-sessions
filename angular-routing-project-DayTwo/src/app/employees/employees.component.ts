import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeList: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {

    this._httpClient.get('http://localhost:5000/employees').subscribe(result => {
      this.employeeList = result;
      console.log(this.employeeList);
    }, (error) => { console.log(error); })

  }

}
