import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

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
import { CartComponent } from '../cart/cart.component';
import { OrdersComponent } from '../orders/orders.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RegisterComponent } from '../register/register.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RatingModule } from '../../../node_modules/primeng/rating';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterService } from './register.service';
import { MessageService } from '../../../node_modules/primeng/api';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,
        DashboardComponent,
        LoginComponent,
        CartComponent,
        OrdersComponent, ProductDetailsComponent,
        RegisterComponent,
        OrdersComponent,
        ProductDetailsComponent],

      imports: [HttpClientTestingModule, BrowserModule,AppRoutingModule,HttpClientModule,
        FormsModule,ReactiveFormsModule,RatingModule,InputTextModule,ButtonModule,
        NgxSpinnerModule,CardModule,MenubarModule,PasswordModule,MessagesModule,MessageModule,TooltipModule,SpinnerModule],

      providers: [UriService,MessageService, GuardService, HttpTestingController, RegisterService, HttpClient, Location, {
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    expect(component.login()).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.createForm()).toBeTruthy();
  });


});
