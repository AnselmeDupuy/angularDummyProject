import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/product.modele';
import { ProductService } from '../../core/services/api/product.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product! : Product;
  
  constructor(
    private route : ActivatedRoute,
    private productService : ProductService
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      });
    });
  }
  
}
