import { Component } from '@angular/core';
import { ProductData } from './models/product-data.interface';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchString = '';
  productDatas: ProductData[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productDatas = this.productService.productDatas;
  }

  handleAddToCart(productData: ProductData): void {
    console.log(productData);
  }
}
