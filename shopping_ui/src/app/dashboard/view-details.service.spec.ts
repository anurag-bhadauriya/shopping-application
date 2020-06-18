import { TestBed } from '@angular/core/testing';
import {UriService} from '../uri.service'
import { ViewDetailsService } from './view-details.service';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { CartElem } from '../cart/cart';

let obj=new CartElem;
let currentUser:any=sessionStorage.getItem('uEmail');
obj.email=currentUser;

describe('ViewDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[UriService]
  }));

  it('should be created', () => {
    const service: ViewDetailsService = TestBed.get(ViewDetailsService);
    expect(service).toBeTruthy();
  });

  it('view products of a category', () => {
    const service: ViewDetailsService = TestBed.get(ViewDetailsService);
    expect(service.view("Electronics")).toBeTruthy();
  });

  it('should search a product', () => {
    const service: ViewDetailsService = TestBed.get(ViewDetailsService);
    expect(service.searchProduct("redmi")).toBeTruthy();
  });

  it('should update the cart', () => {
    const service: ViewDetailsService = TestBed.get(ViewDetailsService);
    expect(service.updateTheCart("lucky@gmail.com",obj)).toBeTruthy();
  });

});
