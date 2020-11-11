import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { UriService } from '../uri.service';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl: string;
  constructor(private http: HttpClient, private uriService: UriService) {
    this.baseUrl = this.uriService.buildMicroServiceUri();
  }

  // To get all the previous orders by that particular customer.
  getOrders(currentUser):Observable<any> {
    return this.http.get<any>(this.baseUrl+'cart/transaction/'+currentUser);
  }
}
