import { DetailsComponent } from './details/details.component';
import { MattableComponent } from './mattable/mattable.component';
import { GeomapComponent } from './geomap/geomap.component';
import { MapviewComponent } from './mapview/mapview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'mapview' , component: MapviewComponent},
  {path : 'geomap', component: GeomapComponent},
  {
    path: 'mattable', component: MattableComponent
  },
  {path: 'details' , component: DetailsComponent},
  {path: '', redirectTo: 'mapview' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
