import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {UriService} from '../uri.service'
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { CartElem } from '../cart/cart';

let obj=new CartElem;
let currentUser:any=sessionStorage.getItem('uEmail');
obj.email=currentUser;

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[UriService]
  }));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('should check out', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service.checkingOut(obj)).toBeTruthy();
  });

  it('should update the quantity', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service.updateQuantity(obj)).toBeTruthy();
  });
});
