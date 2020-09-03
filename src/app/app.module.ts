import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserService } from './user.service';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapviewComponent } from './mapview/mapview.component';
import { MatButtonModule}   from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { GeomapComponent } from './geomap/geomap.component';
import { MattableComponent } from './mattable/mattable.component';
import { DetailsComponent } from './details/details.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MapviewComponent,
    GeomapComponent,
    MattableComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDioYcJYH_A0-YIRaI1CjuUbVWxl1M8N1U'

    })


  ],
  entryComponents:[DetailsComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
