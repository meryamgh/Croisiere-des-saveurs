import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "../../models/country.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public constructor(private http: HttpClient) {
  }

  public getCountries():Observable<Country[]>{

    return this.http.get<Country[]>('/api/countries');
  }
}
