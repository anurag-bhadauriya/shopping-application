import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { of } from "rxjs";
import { Location } from "@angular/common"
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { SpinnerModule } from 'primeng/spinner';
import { UriService } from '../uri.service';
import { GuardService } from '../guard.service';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { OrdersComponent } from '../orders/orders.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RegisterComponent } from '../register/register.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RatingModule } from '../../../node_modules/primeng/rating';
import { MessageService } from '../../../node_modules/primeng/api';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ViewDetailsService } from '../dashboard/view-details.service';


describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,
        DashboardComponent,
        LoginComponent,
        CartComponent,
        OrdersComponent, ProductDetailsComponent,
        RegisterComponent,
        OrdersComponent,
        ProductDetailsComponent,],

      imports: [HttpClientTestingModule, BrowserModule,AppRoutingModule,HttpClientModule,
        FormsModule,ReactiveFormsModule,RatingModule,InputTextModule,ButtonModule,
        NgxSpinnerModule,CardModule,MenubarModule,PasswordModule,MessagesModule,MessageModule,TooltipModule,SpinnerModule],

      providers: [UriService,MessageService, GuardService, HttpTestingController, ViewDetailsService, HttpClient, Location, {
        provide: ActivatedRoute,
        useValue: {
          params: of({
            id: 1001
          })
        }
      },
        { provide: Router }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy;
  });

  it('should checkout', () => {
    expect(component.checkout()).toBeTruthy();
  });

  // it('should calculate bill', () => {
  //   expect(component.calculateBill({},1)).toBeTruthy();
  // });

  it('should remove product of cart', () => {
    expect(component.removeFromCart(1001)).toBeUndefined();
  });

  it('should initialize product details', () => {
    expect(component.prodDetails.length).toBe(0);
  });

  it('should initialize cart items', () => {
    expect(component.cartItems.length).toBe(0);
  });

  it('should initialize cart quantity', () => {
    expect(component.cartQuantity.length).toBe(0);
  });

  it('should initialize current users email', () => {
    expect(component.currentUser).toBeNull();
  });

  it('should initialize cart total', () => {
    expect(component.cartTotal).toBe(0);
  });

  it('should initialize total tax', () => {
    expect(component.totalTax).toBe(0);
  });

  it('should initialize total pay', () => {
    expect(component.totalPayable).toBe(0);
  });
});
