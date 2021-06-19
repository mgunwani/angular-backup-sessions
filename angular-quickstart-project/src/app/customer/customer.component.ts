import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  message: string = "Customer Management System";

  custObj: any = {
    CustomerCode: 1001,
    CustomerName: 'King Kochhar',
    CustomerAmount: 12000
  };

  customerObj: Customer = {
    CustomerCode: 5001,
    CustomerName: 'John Smith',
    CustomerAge: 23
  };

  customerList: Array<Customer> = [
    { CustomerCode: 101, CustomerName: 'King', CustomerAge: 23 },
    { CustomerCode: 102, CustomerName: 'Kochhar', CustomerAge: 45 },
    { CustomerCode: 103, CustomerName: 'John', CustomerAge: 65 },
    { CustomerCode: 104, CustomerName: 'Smith', CustomerAge: 45 },
    { CustomerCode: 105, CustomerName: 'Sarah', CustomerAge: 80 }
  ];

}
