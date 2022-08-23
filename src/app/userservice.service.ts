import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Product } from './productInterface'

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  url = 'https://dummyjson.com/products';
  
  constructor(private http: HttpClient) {}
  
  getData(){    
    return this.http.get<Product[]>(this.url);
  }
}
