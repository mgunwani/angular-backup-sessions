import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id: any;

  employee: Employee = new Employee();

  constructor(private _activatedRoute: ActivatedRoute,
    private _htttpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
    this._htttpClient.get<Employee>('http://localhost:5000/employees/' + this.id).subscribe(result => {
      this.employee = result;
      console.log(this.employee);
    }, (error) => { console.log(error); })
  }
}
