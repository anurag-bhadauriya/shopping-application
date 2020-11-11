import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UriService } from '../uri.service'; 
@Injectable({
  providedIn: 'root'
})
export class ViewDetailsService {
  baseUrl: string;
  constructor(private http:HttpClient, private uriService: UriService) {
    this.baseUrl = this.uriService.buildMicroServiceUri();
  }

  // To find all the products based on particular category
  view(category){
    return this.http.get<any>(this.baseUrl+'product/'+category);
  }

  //To search for the products based on searchKey
  searchProduct(productName){
    return this.http.get<any>(this.baseUrl+'product/search/'+productName);
  }

  //To be called when an item is added,removed or quantity is changed from the cart.
  updateTheCart(currentUser,obj) {
    return this.http.put<any>(this.baseUrl+'cart/updateTheCart/'+currentUser , obj );
  }
}
