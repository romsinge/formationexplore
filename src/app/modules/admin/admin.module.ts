import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from 'src/app/components/product-create/product-create.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'create',
    component: ProductCreateComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class AdminModule {}
