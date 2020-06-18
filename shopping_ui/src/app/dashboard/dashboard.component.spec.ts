import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
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
import { ViewDetailsService } from './view-details.service';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { CartComponent } from '../cart/cart.component';
import { OrdersComponent } from '../orders/orders.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RegisterComponent } from '../register/register.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RatingModule } from '../../../node_modules/primeng/rating';
import { MessageService } from '../../../node_modules/primeng/api';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('number of categories', () => {
    expect(component.categories.length).toEqual(4);
  });

  it('should view products', () => {
    expect(component.viewProductByCategory("Electronics")).toBeFalsy();
  });


  it('should initialize to zero', () => {
    expect(component.details.length).toBe(0);
  });

  it('should initialize email', () => {
    expect(component.currentUser).toBeNull();
  });

  it('should search products', () => {
    expect(component.searchProducts("abc")).toBeTruthy();
  });

  it('should initialize items array', () => {
    expect(component.items).toBeTruthy();
  });

  it('should initialize label of items array', () => {
    expect(component.items.label).toBeUndefined();
  });


});

