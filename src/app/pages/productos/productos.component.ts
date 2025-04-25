import { Component } from '@angular/core';
import { Movie } from '../../types';
import { CardsComponent } from '../../components/cards/cards.component';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [CardsComponent, RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  movies:Movie[]=[];
  

  constructor(private productService:ProductService){}

  ngOnInit():void{
    this.fnGetData();
  }

  fnGetData(){
    this.movies=this.productService.getAllProducts();
  }

  
}
