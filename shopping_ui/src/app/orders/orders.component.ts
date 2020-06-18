import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  currentUser:String;
  itemsOrdered=[];
  errorMessage:string;
  constructor(private router:Router,private orderService:OrdersService) {
    this.currentUser=sessionStorage.getItem('uEmail');
   }
  ngOnInit() {
      this.getOrders(this.currentUser);
  }

  //To get all the orders when view orders is clicked.
  getOrders(currentUser) {
    this.orderService.getOrders(currentUser).subscribe(
      (orderData) =>{ this.itemsOrdered=orderData; console.log(this.itemsOrdered) },
      (err) => { this.errorMessage=err.error.message }
    )
  }

  //To redirect to the product page which is ordered.
  showDetails(id) {
    this.router.navigate(['/productDetail', id]);
  }
}