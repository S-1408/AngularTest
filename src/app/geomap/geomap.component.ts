import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.css']
})
export class GeomapComponent implements OnInit {

  lat: 26.8467088;
  lng: 80.9461592;

  constructor() {

  }

  ngOnInit() {
    if (!navigator.geolocation){
      console.log('device not support geolocation')
    }
   else {
    navigator.geolocation.getCurrentPosition(( position ) => {
        console.log(`lat:${position.coords.latitude},lan:${position.coords.longitude}`);
      });
    }
  }

}
