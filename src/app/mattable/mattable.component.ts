import { HttpClient } from '@angular/common/http';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { User } from '../user';
@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.css']
})
export class MattableComponent implements OnInit {
  users: User ;
  displayColumn:string[]=['Name', 'Email','Phone','ZipCode']


  constructor(private service: UserService,
              private http: HttpClient) { }

  ngOnInit() {
    this.service.getUsers().subscribe((data: User) => {
      console.log(data);
      this.users = data;


    });

  }
}
