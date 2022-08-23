import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: any;
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getDetails((data as any).id);
    });
  }

  getDetails(id: number) {
    this.http
      .get(`https://dummyjson.com/products/${id}`)
      .subscribe((data) => {
        this.product = data;
        console.log(data);
      });
  }
}
