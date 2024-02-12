import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseURL = "PASTE THE URL LINK HERE "

  constructor(private httpClient: HttpClient ) { }

  geeMedicineList():Observable<Medicine[]>{
    const url = `${this.baseURL}/medicines`; 
    return this.httpClient.get<Medicine[]>(url);
  }
}


