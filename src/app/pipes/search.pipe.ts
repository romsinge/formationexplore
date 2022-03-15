import { Pipe, PipeTransform } from '@angular/core';
import { ProductData } from '../models/product-data.interface';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(productDatas: ProductData[], searchString: string): ProductData[] {
    return searchString
      ? productDatas.filter((productData) =>
          productData.name.toLowerCase().includes(searchString.toLowerCase())
        )
      : productDatas;
  }
}
