import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pDetails } from '../shared/productDetails';
// import { currentUser } from '../shared/currentUser';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url="http://localhost:3000/cart/";
  constructor(private http:HttpClient) { }
  //To update the cart while adding and removing the products.
  updateTheCart(currentUser, uCart):Observable<any> {
    return this.http.put<any>('http://localhost:3000/cart/updateTheCart/'+currentUser , uCart );
  }

  // To be called when checkout is done so that the order Details gets updated in the Transactions Table. 
  checkingOut(obj):Observable<any> {
    return this.http.post<any>(this.url+'transaction',obj );
  }

  //To be called while adding the items ,removing the items or changing the quantity in the cart.
  updateQuantity(obj):Observable<any> {
    return this.http.put<any> (this.url+'updateQuantity', obj);
  }
}
