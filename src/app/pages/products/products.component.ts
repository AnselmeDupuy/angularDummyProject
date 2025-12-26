import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/product.modele';
import { ProductService } from '../../core/services/api/product.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent implements OnInit {
  products : Array<Product> = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      const url : string = "https://dummyjson.com/products";
     this.productService.getAllProducts().subscribe({
       next: (data : {products : Array<Product>}) =>{
         this.products = data.products;
       }
     })
  }

}
