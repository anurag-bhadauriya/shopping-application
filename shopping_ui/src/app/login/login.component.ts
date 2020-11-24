import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Routes, Router } from '@angular/router';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app.module';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { RegisterService } from './register.service';
import { Credentials } from './user';
import { MessageService } from 'primeng/api';
import { TokenStorageService } from '../shared/token-storage.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string=null;
  successMessage: string=null;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router,
    private tokenStorage: TokenStorageService) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
      })
      return true;
  }
  ngOnInit() { }

  // To be called when we click login Button
  login() {
    let user:Credentials=new Credentials();
    user.uPass=this.loginForm.value.password;
    user.uEmail=this.loginForm.value.emailId;
    this.registerService.login(user).subscribe(
      (response) => {
        this.tokenStorage.saveToken(response.token);
        sessionStorage.setItem("uEmail", response.userData.uCredentials.uEmail);
        sessionStorage.setItem("uRole", response.userData.uProfile.uIsSeller.toString());
        sessionStorage.setItem("uName",response.userData.uProfile.uName)
        sessionStorage.setItem("uCart", JSON.stringify(response.userData.uCart));
        this.router.navigate(['/dashboard']); 
      },
      (errorResponse) => {
        this.errorMessage = errorResponse.error.message;
        sessionStorage.clear();
      }
    );
    return true;
  }
}