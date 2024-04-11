import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(
    private http: HttpClient
    ) { }

    getCountryData(country: string): Observable<any> {
      return this.http.get(`https://api.worldbank.org/v2/country/${country}?format=json`);
    }
}

