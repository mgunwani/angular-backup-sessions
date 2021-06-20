import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(result => {
      this.userList = result;
      console.log(this.userList);
    }, error => {
      console.log('There are some errors..');
      console.log(error);
    })
  }

}
