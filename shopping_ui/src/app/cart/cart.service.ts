import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UriService } from '../uri.service'; 
// import { currentUser } from '../shared/currentUser';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl: string;
  constructor(private http:HttpClient, private uriService: UriService) { 
    this.baseUrl = this.uriService.buildMicroServiceUri();
  }
  //To update the cart while adding and removing the products.
  updateTheCart(currentUser, uCart):Observable<any> {
    return this.http.put<any>(this.baseUrl + 'cart/updateTheCart/'+currentUser , uCart );
  }

  // To be called when checkout is done so that the order Details gets updated in the Transactions Table. 
  checkingOut(obj):Observable<any> {
    return this.http.post<any>(this.baseUrl+'cart/transaction',obj );
  }

  //To be called while adding the items ,removing the items or changing the quantity in the cart.
  updateQuantity(obj):Observable<any> {
    return this.http.put<any> (this.baseUrl+'/cart/updateQuantity', obj);
  }
}
