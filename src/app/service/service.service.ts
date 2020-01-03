import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  GetData():Observable<[]>{
    return this.http.get<any>('https://admin.balsamee.com/api/v5/places?latitude=30.044482654785146&longitude=31.235799312591553&type=clinics&lang=en')
    .pipe(
      map(x=>{return x.places})
    ) 
  }

}
