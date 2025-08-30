import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Customers } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  // Example: get customer list
  getCustomers() : Observable<Customers[]>{
    return this.http.get<Customers[]>(`${this.baseUrl}/${environment.list}`);
  }


}