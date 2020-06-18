import { TestBed } from '@angular/core/testing';

import { ProductDetailsService } from './product-details.service';
import { CartElem } from '../cart/cart';
import { HttpClientTestingModule } from '../../../node_modules/@angular/common/http/testing';
import { UriService } from '../uri.service';

let obj = new CartElem;
let currentUser: any = sessionStorage.getItem('uEmail');
obj.email = currentUser;

describe('ProductDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UriService]
  }));

  it('should be created', () => {
    const service: ProductDetailsService = TestBed.get(ProductDetailsService);
    expect(service).toBeTruthy();
  });

  it('should give product details', () => {
    const service: ProductDetailsService = TestBed.get(ProductDetailsService);
    expect(service.productDetail(1017)).toBeTruthy();
  });

  it('should add product to cart', () => {
    const service: ProductDetailsService = TestBed.get(ProductDetailsService);
    expect(service.updateTheCart(currentUser, obj)).toBeTruthy();
  });

});
