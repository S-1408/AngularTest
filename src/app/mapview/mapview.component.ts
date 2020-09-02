import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {



  users: User;
  constructor(private http: HttpClient,
              private service: UserService ) { }


  ngOnInit(): void {
    this.showUser();
  }

  showUser(){
    this.service.getUsers().subscribe((data: User) => {
      // this.users = {...data };
      console.log(data);
      this.users = data;
    });

    }

}
