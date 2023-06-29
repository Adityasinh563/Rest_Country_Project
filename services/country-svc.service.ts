import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrySvcService {

  constructor(private http : HttpClient) { }

  getAllCountries() : Observable<any>{
    return this.http.get(`https://restcountries.com/v3.1/all`)
  }

  getCountryByName(value : any){
    return this.http.get(`https://restcountries.com/v3.1/name/${value}`)
  }

  getCountryByRegion(value: any){
    return this.http.get(`https://restcountries.com/v3.1/region/${value}`)
  }
}
