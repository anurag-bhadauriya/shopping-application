import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '../../../node_modules/@angular/router';
import { User } from '../login/user';
import { CartElem } from './cart';
import { NgxSpinnerService } from 'ngx-spinner';
import { literalMap } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];  // To store the product id of the items added in cart.
  prodDetails = [];
  // count:Number;
  errorMessage: String;
  currentUser: any = null;
  loggedUser: User;
  cartTotal: number = 0;
  totalTax: number = 0;
  totalPayable: number = 0;
  cartQuantity = [];
  constructor(private spinner: NgxSpinnerService, private cs: CartService, private router: Router) {
    console.log("Inside cart constructor....");
    this.currentUser = sessionStorage.getItem('uEmail');
  }


  ngOnInit() {
    console.log("inside cart INIT....")
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1700);

    this.initialBilling()
  }

  // To Calculate the Initial Billing while coming to the Cart
  initialBilling() {
    this.cartItems = JSON.parse(sessionStorage.getItem('uCart'));
    //Calculate the billing Amount
    this.cartTotal = 0;

    for (let i = 0; i < this.cartItems.length; i++) {
      this.cartTotal += this.cartItems[i].quantity * (1 - this.cartItems[i].pSeller.pDiscount) * this.cartItems[i].price;
    }

    this.totalTax = (17 / 100) * this.cartTotal;
    this.totalPayable = this.totalTax + this.cartTotal;

    //Array for the cart quantity.
    for (let i = 0; i < this.cartItems.length; i++) {
      this.cartQuantity.push(this.cartItems[i].quantity)
    }

    console.log(this.cartQuantity);
  }


  //Remove Items from the cart
  removeFromCart(id) {
    let updatedCart = this.cartItems.filter(elem => {
      if (elem._id == id) {return false}
      else {return true};
    })
    console.log(updatedCart);
    this.cartItems = updatedCart;
    sessionStorage.setItem('uCart', JSON.stringify(this.cartItems));
    this.cs.updateTheCart(this.currentUser, this.cartItems).subscribe(
      (success) => { console.log("Product successfully removed from the cart.") },
      (failure) => { this.errorMessage = failure.error.message }
    )
  }


  //Calculate Bill of the Cart while making change to the quantity in the cart.
  calculateBill(item, qty) {

    if (qty == -1 && item.quantity == 1) { }
    else if (qty == 1 && item.quantity == item.pSeller.pQuantity) { }
    else {
      this.cartItems = JSON.parse(sessionStorage.getItem('uCart'));
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i]._id == item._id) {
          this.cartQuantity[i] = parseInt(this.cartQuantity[i]) + qty;
          this.cartItems[i].quantity = this.cartQuantity[i];
        }
      }
      console.log("calculate BIll==>", this.cartItems);
      sessionStorage.setItem('uCart', JSON.stringify(this.cartItems));
      //Calculating the total Bill Amount
      this.cartTotal = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        this.cartTotal += this.cartItems[i].quantity * (1 - this.cartItems[i].pSeller.pDiscount) * this.cartItems[i].price
      }
      this.totalTax = (17 / 100) * this.cartTotal;
      this.totalPayable = this.totalTax + this.cartTotal;
      //Updating the quantity in the user Cart
      this.cs.updateTheCart(this.currentUser, this.cartItems).subscribe(
        (success) => { console.log("Quantity successfully updated in cart.") },
        (failure) => { this.errorMessage = failure.error.message }
      )
    }
  }

  //To checkout from the Cart
  checkout() {
    let products = [];
    for (let i = 0; i < this.cartItems.length; i++) {
      products.push({ pid: this.cartItems[i]._id, qty: this.cartItems[i].quantity, price: this.cartItems[i].price })
    }

    console.log(products);
    //Object to be inserted inside the transaction table
    let obj = {
      userEmailId: this.currentUser,
      price: this.totalPayable,
      orderId: null,
      orderDate: new Date(),
      products: products,
    }
    sessionStorage.setItem('orders', JSON.stringify(obj));
    //Calling service file to reduce the quantity
    let count = 0;
    for (let i = 0; i < products.length; i++) {
      this.cs.updateQuantity(products[i]).subscribe(
        (success) => { count += 1 },
        (failure) => { this.errorMessage = failure.error.message }
      )
    }

    this.cs.checkingOut(obj).subscribe(
      (success) => {
        console.log("Data Updated");
        this.cartItems = [];
        sessionStorage.setItem('uCart', JSON.stringify(this.cartItems));
        this.router.navigate(['/orders'])
      },
      (failure) => { this.errorMessage = failure.error.message }
    )
    return true;
  }

  //To show the product details
  showDetails(id) {
    this.router.navigate(['/productDetail', id]);
  }

}
