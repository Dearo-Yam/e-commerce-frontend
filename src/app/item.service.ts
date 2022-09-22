import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getOrders(): Observable<Item[]> {
    const items = of(ITEMS);
    return items;
  }

  getOrder(id: number): Observable<Item> {
    /**
     * Add error handling here for finding item order ID
     */
    const item = ITEMS.find(i => i.id == id)!;
    return of(item);
  }
}
