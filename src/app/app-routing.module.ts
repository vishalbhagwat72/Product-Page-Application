import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'productList',component:ProductComponent},
  {path:'productDetails/:id',component:DetailsComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }