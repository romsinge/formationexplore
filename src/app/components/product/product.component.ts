import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductData } from 'src/app/models/product-data.interface';

@Component({
  selector: 'explore-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productData?: ProductData;
  @Output() addToCart: EventEmitter<ProductData> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.addToCart.emit(this.productData);
  }
}
