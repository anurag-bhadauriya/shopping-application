import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewDetailsService {
  constructor(private http:HttpClient) { }

  // To find all the products based on particular category
  view(category){
    return this.http.get<any>('http://localhost:3000/product/'+category);
  }

  //To search for the products based on searchKey
  searchProduct(productName){
    return this.http.get<any>('http://localhost:3000/product/search/'+productName);
  }

  //To be called when an item is added,removed or quantity is changed from the cart.
  updateTheCart(currentUser,obj) {
    return this.http.put<any>('http://localhost:3000/cart/updateTheCart/'+currentUser , obj );
  }
}
