import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UriService } from '../uri.service'; 

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  errorMessage: String;
  baseUrl: string;
  constructor(private http: HttpClient, private uriService: UriService) {
    this.baseUrl = this.uriService.buildMicroServiceUri();
  }

  // to get the details of the product
  productDetail(id): Observable<any> {
    return this.http.get<any>(this.baseUrl+'product/productDetail/'+id);
  }

  //to be called when the item is added, removed or the quantity is upadted in the cart.
  updateTheCart(currentUser,obj):Observable<any> {
    return this.http.put<any>(this.baseUrl+'cart/updateTheCart/'+currentUser , obj );
  }
}
