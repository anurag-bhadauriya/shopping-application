import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, ActivatedRoute } from './../../node_modules/@angular/router';
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
import { UriService } from './uri.service';
import { GuardService } from './guard.service';
import { ViewDetailsService } from './dashboard/view-details.service';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from './../../node_modules/@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RatingModule } from './../../node_modules/primeng/rating';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterService } from './login/register.service';
import { MessageService } from '../../node_modules/primeng/api';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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

      providers: [UriService, GuardService,MessageService, HttpTestingController, RegisterService, HttpClient, Location, {
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

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'hoopla'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hoopla');
  }));

  it(`Checking authenticateBySession`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.authenticateBySession()).toBeFalsy();
  }));

  it('should show feedback', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.submitText()).toBeUndefined();
  }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
