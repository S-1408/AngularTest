import { UserService } from './user.service';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapviewComponent } from './mapview/mapview.component';

import { HttpClientModule } from '@angular/common/http';
import { User } from './user';
@NgModule({
  declarations: [
    AppComponent,
    MapviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreModule,
    HttpClientModule,


  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
