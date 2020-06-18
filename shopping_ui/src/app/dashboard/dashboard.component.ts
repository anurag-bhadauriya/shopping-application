import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ViewDetailsService } from './view-details.service';
import { CartElem } from '../cart/cart';
import { CartComponent } from '../cart/cart.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem } from 'primeng/api';
import { CanActivate } from '../../../node_modules/@angular/router/src/utils/preactivation';
import { GuardService } from '../guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  prodToBeSearched: string;
  categorySelected: string;
  details = [];
  currentUser: any = null;
  categories: string[] = ['Electronics', 'Furniture', 'Shoes', 'Clothing']
  errorMessage: string = '';
  slideShow: boolean;
  productShow: boolean;
  noProduct: boolean;

  constructor(private spinner: NgxSpinnerService, private router: Router,
    private route: ActivatedRoute, private viewService: ViewDetailsService) {
    this.currentUser = sessionStorage.getItem("uEmail");
  }
  items: any;
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1700);
    this.slideShow = true;
    this.items = [
      {
        label: this.categories[0], command: () => this.viewProductByCategory(this.categories[0]),
        icon: 'fa fa-mobile',
        items: [
          { label: 'Apple', command: () => this.searchProducts('iphone') },
          { label: 'Asus', command: () => this.searchProducts('asus') },
          { label: 'Xiaomi', command: () => this.searchProducts('redmi') },
          { label: 'Lenovo', command: () => { this.searchProducts('lenovo'); this.searchProducts('moto') } }]
      },
      {
        label: this.categories[1], command: () => this.viewProductByCategory(this.categories[1]),
        icon: 'fa fa-home',
        items: [
          {
            label: 'Tables',
            items: [
              { label: 'Computer Table', command: () => this.searchProducts('Computer Table') },
              { label: 'Study Table', command: () => this.searchProducts('Study Table') },
              { label: 'Dressing Table', command: () => this.searchProducts('Dressing Table') },
              { label: 'Dining Table', command: () => this.searchProducts('Dining Table') }
            ]
          },
          {
            label: 'Sofas',
            items: [
              { label: 'Recliner Sofa', command: () => this.searchProducts('Recliner Sofa') }
            ]
          }
        ]
      },
      {
        label: 'Sport Shoes', command: () => this.viewProductByCategory(this.categories[2]),
        icon: 'fa fa-futbol-o',
        items: [
          {
            label: 'For Him',
            items: [
              { label: 'Adidas', command: () => this.searchProducts('Adidas Running Men') },
              { label: 'Nike', command: () => this.searchProducts('Nike Running Men') }
            ]
          },
          {
            label: 'For Her',
            items: [
              { label: 'Adidas', command: () => this.searchProducts('Adidas Running Women') },
              { label: 'Reebok', command: () => this.searchProducts('Reebok') }
            ]
          }
        ]
      },
      {
        label: this.categories[3], command: () => this.viewProductByCategory(this.categories[3]),
        icon: 'fa fa-child',
        items: [
          {
            label: 'Traditional',
            items: [
              { label: 'Kurta', command: () => this.searchProducts('kurta') },
              { label: 'Saree', command: () => this.searchProducts('saree') },
              { label: 'Modi Coat', command: () => this.searchProducts('modi coat') }
            ]
          },
          {
            label: 'Western',
            items: [
              { label: 'US Polo Assassin', command: () => this.searchProducts('us polo') },
              { label: 'UCB T-shirt', command: () => this.searchProducts('ucb') }
            ]
          }
        ]
      }
    ]
  }

  // To search the particular product based on some search key.
  searchProducts(searchKey) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1700);
    this.slideShow = false;
    this.categorySelected = null;
    this.prodToBeSearched = searchKey;
    this.viewService.searchProduct(this.prodToBeSearched).subscribe(
      success => {
        this.details = [];
        for (let detail of success) {
          this.details.push(detail);
        }
        if (this.details.length > 0) {
          this.slideShow = false;
          this.productShow = true;
        }
      },
      failure => {
      this.errorMessage = failure.error.message;
      this.noProduct=true;
      }
    )
    return true;
  }

  //To view the products based on some category
  viewProductByCategory(choosenCategory) {
    this.productShow = true;
    this.slideShow = false;
    this.categorySelected = choosenCategory;
    this.viewService.view(choosenCategory).subscribe(
      success => {
        this.details = success;
        if (this.details) {
          this.slideShow = false;
          this.productShow = true;
        }
      },
      failure => this.errorMessage = failure.error.message
    )
  }

  //To navigate towards the particular product page.
  showDetails(id) {
    this.router.navigate(['/productDetail', id]);
  }

  //To be called when the items are added, removed or the quantity is updated in the cart.
  goToCart(obj) {

    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
    if (this.currentUser != null) {
      let alreadyAvailable: boolean = false;
      let itemsInCart = JSON.parse(sessionStorage.getItem('uCart'));
      itemsInCart.forEach(elem => {
        if (elem._id == obj._id) { elem.quantity += 1; alreadyAvailable = true }
      })
      if (!alreadyAvailable) {
        // Item to be pushed in the session storege uCart letiable.
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
            "s_Id": obj.pSeller.s_Id,
            "pDiscount": obj.pSeller.pDiscount,
            "pQuantity": obj.pSeller.pQuantity,
            "pShippingCharges": obj.pSeller.pShippingCharges
          }
        }
        itemsInCart.push(itemToPushInCart);
        console.log(itemsInCart);
      }
      sessionStorage.setItem('uCart', JSON.stringify(itemsInCart));
      this.viewService.updateTheCart(this.currentUser, itemsInCart).subscribe(
        (success) => { console.log("updation successfull ") },
        (failure) => { this.errorMessage = failure.error.message }
      )
    }
    else { this.router.navigate(['/login']); }
  }
}