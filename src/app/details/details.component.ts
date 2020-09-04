import { UserService } from './../user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  users: User;
  constructor(public service: UserService,
           @Inject(MAT_DIALOG_DATA) public data:any
              ) { }


  ngOnInit(): void {
    console.log(this.data);
    this.service.form.patchValue(this.data);
     this.service.form.get('zipcode').setValue(this.data.address.zipcode);
  }

}
