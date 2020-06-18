import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CartService } from '../cart/cart.service'
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { of } from "rxjs";
import { Location } from "@angular/common"
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RegisterComponent } from '../register/register.component';
import { PasswordModule } from '../../../node_modules/primeng/password';
import { MessagesModule } from '../../../node_modules/primeng/messages';
import { MessageModule } from '../../../node_modules/primeng/message';
import { TooltipModule } from '../../../node_modules/primeng/tooltip';
import { SpinnerModule } from '../../../node_modules/primeng/spinner';
import { MenubarModule } from '../../../node_modules/primeng/menubar';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { UriService } from '../uri.service';
import { GuardService } from '../guard.service';
import { ViewDetailsService } from '../dashboard/view-details.service';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RatingModule } from '../../../node_modules/primeng/rating';
import { CartComponent } from '../cart/cart.component';
import { MessageService } from '../../../node_modules/primeng/api';


describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,
        DashboardComponent,
        LoginComponent,
        OrdersComponent,
        ProductDetailsComponent,
        RegisterComponent,
        CartComponent],

      imports: [HttpClientTestingModule, BrowserModule, AppRoutingModule, HttpClientModule,
        FormsModule, ReactiveFormsModule, RatingModule, InputTextModule, ButtonModule,
        NgxSpinnerModule, CardModule, MenubarModule, PasswordModule, MessagesModule, MessageModule, TooltipModule, SpinnerModule],

      providers: [UriService, MessageService, GuardService, HttpTestingController, ViewDetailsService, HttpClient, Location, {
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
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeUndefined();
  // });

  it('should get orders', () => {
    expect(component.getOrders("abhishek@gmail.com")).toBeUndefined();
  });


  it('should initialize items', () => {
    expect(component.itemsOrdered.length).toBe(0);
  });

});
