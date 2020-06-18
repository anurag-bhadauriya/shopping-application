import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '../../../node_modules/@angular/forms';
import { RegisterService } from '../login/register.service';
import { Router } from '../../../node_modules/@angular/router';
import { User } from '../login/user';
import { Message } from 'primeng//api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
        :host ::ng-deep .ui-message,
        :host ::ng-deep .ui-inputtext {
            margin-right: .25em;
        }
    `],
  providers: []
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  successMessage: string = null;
  registerForm: FormGroup;
  emailMsg: string;
  msgs: Message[] = [];
  constructor(private fb: FormBuilder, private registerService: RegisterService, private messageService: MessageService) {
    this.createForm();
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Successfully Registered! Login to Continue...' });
  }
  createForm() {
    this.registerForm = this.fb.group({
      emailId: ['',
        [Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        Validators.required]],
      password: ['', [Validators.required,
      Validators.pattern(/(?=^.{7,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z][a-zA-Z ]*[A-Za-z]$/)]],
      dob: ['', [Validators.required, validateDate]],
      phoneNo: ['', [Validators.required, Validators.pattern(/^[^0][\d]{9}$/)]],
      address: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s,.'-]{10,}$/)]]
    })
    return true;
  }
  ngOnInit() { }

  // To check for the already existence of a particular user.
  check() {
    this.emailMsg = null;
    console.log(this.registerForm.value.emailId);
    if (this.registerForm.value.emailId != "") {
      this.registerService.check(this.registerForm.value.emailId).subscribe(
        (response) => {
          this.emailMsg = response.message; console.log(this.emailMsg);
        },
        (errorResponse) => {
          console.log(errorResponse);
          this.emailMsg = null;
        }
      )
    }
  }

  // To be called when user clicks the register button after filling the register details in registration page.
  register() {
    // let user: User = new User{ user1: Credentials, user2: Profile };
    let user: User = new User();
    this.successMessage = null;
    this.errorMessage = null;

    // let user1: Credentials = new Credentials();
    // let user2: Profile = new Profile();
    user.uCredentials.uEmail = this.registerForm.value.emailId;
    user.uCredentials.uPass = this.registerForm.value.password;
    user.uProfile.uName = this.registerForm.value.name;
    user.uProfile.uDOB = this.registerForm.value.dob;
    user.uProfile.uPhone = this.registerForm.value.phoneNo;
    user.uProfile.uIsSeller = false;
    user.uAddress.line1 = this.registerForm.value.address;
    this.registerService.registerUser(user).subscribe(
      (response) => {
        // sessionStorage.setItem("uEmail", response.uCredentials.uEmail);
        // sessionStorage.setItem("uRole", response.uProfile.uIsSeller.toString());
        // sessionStorage.setItem("uCart", JSON.stringify(response.uCart));
        this.successMessage = response.message;
        // this.router.navigate(['/login']); 
      },
      (errorResponse) => {
        this.errorMessage = errorResponse.error.message;
        // sessionStorage.clear();
      }
    );
  }


}

//To validate the date entered by the user in registration form
function validateDate(date: FormControl) {
  let current: any = new Date();
  let dob: any = new Date(date.value)
  if (dob > current) {
    return {
      dateError: {
        message: "Entered date cannot be a future date"
      }
    }
  } else {
    return null;
  }
}
