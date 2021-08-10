import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.updateProducts();
  }

  updateProducts(): void {
    this.productService.getAll().subscribe(response => {
      this.products = response;
    });
  }
}
