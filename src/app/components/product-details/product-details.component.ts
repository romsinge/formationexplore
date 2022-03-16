import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductData } from 'src/app/models/product-data.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'explore-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productData?: ProductData;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productService
        .getProductById(params['id'])
        .subscribe((productData) => {
          this.productData = productData;
        });
    });
  }
}
