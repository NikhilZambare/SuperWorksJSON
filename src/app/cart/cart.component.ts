import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Cart} from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData:Cart[]=[];
  cartCount:number=0;
  proQty:number=1;
  totalAmmount:any=0;
  qtytotal=0;
  constructor(private http:ProductService) { }

  ngOnInit(): void {
    this.getCartData();
    this.getCartCount();
    
  }
  getCartData(){
    this.http.getcartData().subscribe(a=>{
      this.cartData=a;
      this.calTotalAmount();
    })
  }
  calTotalAmount(){
    let total=0;
    let qty_total=0;

    this.cartData.map(item=>{
      total += (Number(item.rate) * Number(item.qty));
      qty_total += Number(item.qty);
    })
    this.totalAmmount=total;
    this.qtytotal=qty_total;
    
  }
  updateQty(qty,data){
    let newData=data;
    newData.qty=Number(qty);
    this.http.updateCartQty(newData).subscribe();
    this.getCartData();
  }
  getCartCount(){
    this.http.getcartData().subscribe(a=>{
      this.cartCount=a.length;
    })
  }
  renoveItem(data){
    let newProduct=data;
    newProduct.isAdded=true;
    this.http.updateProductData(newProduct).subscribe();
    this.http.renoveCartItem(data.id).subscribe();
    this.getCartData();
  }
}
