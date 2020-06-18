import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { of } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { Component, OnInit, OnChanges, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { UriService } from '../uri.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';

import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { GuardService } from '../guard.service';
import { RegisterService } from '../login/register.service';
import { CartComponent } from '../cart/cart.component';
import { RegisterComponent } from '../register/register.component';

import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { SpinnerModule } from 'primeng/spinner';

import { OrdersComponent } from '../orders/orders.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';


describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent,
        AppComponent,
        DashboardComponent,
        LoginComponent,
        CartComponent,
        RegisterComponent,
        OrdersComponent
      ],
      imports: [
        BrowserModule, AppRoutingModule, HttpClientModule,
        FormsModule, ReactiveFormsModule, RatingModule, InputTextModule, ButtonModule,
        NgxSpinnerModule, CardModule, MenubarModule, PasswordModule, MessagesModule,
        MessageModule, TooltipModule, SpinnerModule, HttpClientTestingModule
      ],
      providers: [UriService, GuardService, MessageService, RegisterService, Location, {
        provide: ActivatedRoute,
        useValue: {
          params: of({
            id: 1001
          })
        }
      }, { provide: Router }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show detail of one product only', () => {
    expect(component.productDetail()).toBeUndefined();
  });

  it('should go back', () => {
    expect(component.goBack()).toBeUndefined();
  });


});
