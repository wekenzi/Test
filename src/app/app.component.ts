import { Component, ElementRef } from '@angular/core';
import { ServiceService } from "src/app/service/service.service";
import { PlacesDto } from "src/app/places-dto";
import { GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:ServiceService,private myElement: ElementRef){}

  hideSideBar=false;

  places:PlacesDto[]=[];
  latitude = 30.052338;
  longitude = 31.235808;

  map: GoogleMapsAPIWrapper;
  openedWindow:string;
  
  ngOnInit(){
    this.service.GetData()
    .subscribe(data=>{
      console.log(data);
      this.places = data;
    })
  }

  mapReady(map) {
    this.map = map;
  }

  mapClicked(event){
    console.log(event);
  }

  selectMarker(id,event){
    this.openedWindow = id;
    this.map.setCenter({ lat: event.latitude, lng: event.longitude })
    let el = document.querySelector(`#${id}`)
    el.scrollIntoView({behavior:"smooth"});
  }

  placeClicked(place){
    this.openedWindow = place.id;
    this.map.setCenter({ lat: place.latitude, lng: place.longitude })
  }

  isWindowOpen(id){
    return this.openedWindow == id;
  }

  windowClosed(id){
    setTimeout(() => {
      if (this.openedWindow == id) {
        this.openedWindow = null
      }
    }, 100);
  }
  

}
