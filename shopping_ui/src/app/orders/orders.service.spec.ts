import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { CartElem } from '../cart/cart';
import { HttpClientTestingModule } from '../../../node_modules/@angular/common/http/testing';
import { UriService } from '../uri.service';

let obj=new CartElem;
let currentUser:any=sessionStorage.getItem('uEmail');
obj.email=currentUser;

describe('OrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[UriService]
  }));


  it('should should get orders', () => {
    const service: OrdersService = TestBed.get(OrdersService);
    expect(service.getOrders("lucky@gmail.com")).toBeTruthy();
  });

});
