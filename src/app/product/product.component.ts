import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  data: any;

  constructor(private product: UserserviceService, private router: Router) {}

  ngOnInit(): void {
    this.product.getData().subscribe((data: any[]) => {
      this.data = (data as any).products;
      console.log(this.data);
    });
  }
  Details(product: any): void {
    console.log('CLICKED');
    this.router.navigate(['productDetails', product.id]);
  }
}
