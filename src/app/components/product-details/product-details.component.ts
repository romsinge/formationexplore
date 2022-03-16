import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, Observable } from 'rxjs';
import { ProductData } from 'src/app/models/product-data.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'explore-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productData$?: Observable<ProductData | undefined>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productData$ = this.route.params.pipe(
      mergeMap((params) => {
        return this.productService.getProductById(params['id']);
      })
    );
  }
}
