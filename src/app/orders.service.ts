import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  getTotalOrdersShipped() {
    return this.http.get<any>(`${this.baseUrl}/totalshipped`);
  }

  getPendingOrders(){
    return this.http.get<any>(`${this.baseUrl}/show`);
  }
}
