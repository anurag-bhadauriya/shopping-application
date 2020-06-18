import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { UriService } from './uri.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { GuardService } from './guard.service';
import { RegisterService } from './login/register.service';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { CartComponent } from './cart/cart.component'

import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { SpinnerModule } from 'primeng/spinner';

import { OrdersComponent } from './orders/orders.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CartComponent,
    OrdersComponent, ProductDetailsComponent,
    RegisterComponent,
    OrdersComponent,
    ProductDetailsComponent,
  ],

  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    FormsModule, ReactiveFormsModule, RatingModule, InputTextModule, ButtonModule, ToastModule, BrowserAnimationsModule,
    NgxSpinnerModule, CardModule, MenubarModule, PasswordModule, MessagesModule, MessageModule,
    TooltipModule, SpinnerModule, ScrollPanelModule, SidebarModule, PanelMenuModule, InputTextareaModule

  ],
  providers: [MessageService, UriService, RegisterService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
