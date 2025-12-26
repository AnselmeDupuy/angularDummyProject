import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../models/product.modele';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts () : Observable<{products : Array<Product>}> {
    const url : string = "https://dummyjson.com/products";
    return this.http.get<{products : Array<Product>}>(url);
  }

  getProductById (id: number) : Observable<Product> {
    const url : string = `https://dummyjson.com/products/${id}`;
    return this.http.get<Product>(url)
  }
}
