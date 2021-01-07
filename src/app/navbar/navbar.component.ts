import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 @Input() cartCount:number;
  constructor() { }
  ngOnInit(): void {
  }

}
