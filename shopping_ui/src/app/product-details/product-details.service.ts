import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  errorMessage: String;
  url = "http://localhost:3000/product/productDetail/"
  constructor(private http: HttpClient) { }

  // to get the details of the product
  productDetail(id): Observable<any> {
    return this.http.get<any>(this.url+id);
  }

  //to be called when the item is added, removed or the quantity is upadted in the cart.
  updateTheCart(currentUser,obj):Observable<any> {
    return this.http.put<any>('http://localhost:3000/cart/updateTheCart/'+currentUser , obj );
  }
}
