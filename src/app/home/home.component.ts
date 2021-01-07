import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Products[];
  cartCount:number=0;

  constructor( private http:ProductService) { }

  ngOnInit(): void {
    this.http.getProductData().subscribe(
      a=>{
        this.products=a;
      }
    )
    this.getCartCount()
  }
  addToCart(product){
    this.http.addCartData(product).subscribe();
    let newProduct=product;
    newProduct.isAdded=false;
    this.http.updateProductData(newProduct).subscribe();
    this.getCartCount();
  }
  getCartCount(){
    this.http.getcartData().subscribe(a=>{
      this.cartCount=a.length;
    })
  }
}
