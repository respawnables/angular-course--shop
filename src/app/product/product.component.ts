import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {}

  title = 'Ürün Listesi'
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 2500, categoryId: 1, description: 'Asus ZenBook', imageUrl: "https://www.notebookcheck-tr.com/uploads/tx_nbc2/SL4_AMD_1.jpg" },
    { id: 2, name: 'Mouse', price: 50, categoryId: 2, description: 'A4Tech', imageUrl: 'https://ayb.akinoncdn.com/products/2020/12/02/54024/4b3c9b41-99c8-4783-b29d-4842b809734b_size780x780_quality60_cropCenter.jpg' }
  ]

  ngOnInit(): void {
  }

}
