import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ProductData } from 'src/app/models/product-data.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'explore-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  productDataForm: FormGroup = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required],
      [this.isNameAvailable.bind(this)]
    ),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required, this.imageExtension]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  handleSubmit() {
    console.log(this.productDataForm);
  }

  imageExtension(control: AbstractControl): ValidationErrors | null {
    return new RegExp(/^.+\.jpg$/gi).test(control.value)
      ? null
      : {
          imageExtension: true,
        };
  }

  // Creer un validateur asynchrone
  // qui verifie si aucun autre article n'a le meme name
  isNameAvailable(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.productService.productDatas.pipe(
      map((productDatas) => {
        return productDatas.some((product) => product.name === control.value)
          ? {
              nameNotAvailable: true,
            }
          : null;
      })
    );
  }
}
