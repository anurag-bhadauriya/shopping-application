import { Component, OnInit, Input } from '@angular/core';
import { ProductDetailsService } from './product-details.service'
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { CartElem } from '../cart/cart';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';
import { GuardService } from '../guard.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  errorMessage: string;
  productId: number;
  productObj: any;
  agree: boolean = false;
  currentUser: any = null;
  show: boolean = false;
  constructor(private location: Location, private spinner: NgxSpinnerService,
    private service: ProductDetailsService, private route: ActivatedRoute, private router: Router) {
    this.currentUser = sessionStorage.getItem('uEmail');
    console.log(this.currentUser);
  }
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1700);
    this.route.params.subscribe(param => this.productId = param['id']);
    this.productDetail();
  }

  //To get all the productDetails.
  productDetail() {
    this.agree = true;
    this.errorMessage = null;
    this.productObj = null;
    this.service.productDetail(this.productId).subscribe(
      response => { console.log(response), this.productObj = response },
      err => { console.log(err.error.message), this.errorMessage = err.error.message }
    )
  }

  //To be called when item to be added, removed or quantity is updated in the cart.
  goToCart(obj) {
    this.show = true;
    if (this.currentUser != null) {
      let alreadyAvailable: boolean = false;
      let itemsInCart = JSON.parse(sessionStorage.getItem('uCart'));
      itemsInCart.forEach(elem => {
        if (elem._id == obj._id) { elem.quantity += 1; alreadyAvailable = true }
      })
      if (!alreadyAvailable) {
        // Item to be pushed in the session storage uCart letiable.
        let itemToPushInCart = {
          uEmail: this.currentUser,
          _id: obj._id,
          pName: obj.pName,
          pDescription: obj.pDescription,
          quantity: 1,
          price: obj.price,
          color: obj.color,
          image: obj.image,
          specification: obj.specification,
          "pSeller": {
            "sId": obj.pSeller.sId,
            "pDiscount": obj.pSeller.pDiscount,
            "pQuantity": obj.pSeller.pQuantity,
            "pShippingCharges": obj.pSeller.pShippingCharges
          }
        }
        itemsInCart.push(itemToPushInCart);
        console.log(itemsInCart);
      }
      sessionStorage.setItem('uCart', JSON.stringify(itemsInCart));
      this.service.updateTheCart(this.currentUser, itemsInCart).subscribe(
        (success) => { console.log("updation successfull ") },
        (failure) => { this.errorMessage = failure.error.message }
      )
    }
    else {this.router.navigate(['/login']);}
  }

  // To go to the previous page.
  goBack() {
    this.location.back();
  }
}