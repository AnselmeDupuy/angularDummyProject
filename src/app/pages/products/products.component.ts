import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/product.modele';
import { ProductService } from '../../core/services/api/product.service';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products : Array<Product> = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
     this.productService.getAllProducts().subscribe({
       next: (data : {products : Array<Product>}) =>{
         this.products = data.products;
       }
     })
  }

}
