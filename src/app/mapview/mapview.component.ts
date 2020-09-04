import { DetailsComponent } from './../details/details.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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




   users: User ;
   id;
 public rowId;
  constructor(private http: HttpClient,
              private service: UserService,
              private dialog : MatDialog,
               ) { }


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

    onView(user){
      const dialogCOnfig =new MatDialogConfig();
      dialogCOnfig.disableClose=true;
      dialogCOnfig.autoFocus= true;
      dialogCOnfig.width= "30%";
      dialogCOnfig.data = user;
      this.dialog.open(DetailsComponent, dialogCOnfig );

      console.log(user);
    }
    }

// onClose(){
//   this.dialogRef.close();
// }

