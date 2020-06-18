import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) { }

  // To get all the previous orders by that particular customer.
  getOrders(currentUser):Observable<any> {
    return this.http.get<any>('http://localhost:3000/cart/transaction/'+currentUser);
  }
}
