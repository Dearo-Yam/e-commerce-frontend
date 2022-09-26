import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  getTotalOrdersShipped() {
    return this.http.get<any>(`${this.baseUrl}/shipped/count`);
  }

  getAvgTimeToShipp() {
    return this.http.get<any>(`${this.baseUrl}/shipped/avg`);
  }

  getPendingOrders(){
    return this.http.get<any>(`${this.baseUrl}/pending`)
  }

  getAllOrders(){
    return this.http.get<any>(`${this.baseUrl}/all`)
  }
  getShippedOrders(){
    return this.http.get<any>(`${this.baseUrl}/shipped`)
  }
}
