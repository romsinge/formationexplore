import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductData } from '../models/product-data.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  get productDatas(): Observable<ProductData[]> {
    return this.http.get<ProductData[]>('http://localhost:3000/products');
  }

  getProductById(id: string): Observable<ProductData | undefined> {
    return this.productDatas.pipe(
      map((productDatas) => {
        return productDatas.find((product) => product.id === id);
      })
    );
  }

  private _productDatas: ProductData[] = [];

  constructor(private http: HttpClient) {}
}
