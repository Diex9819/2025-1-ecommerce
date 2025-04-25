import { Component, Signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  counter!: Signal<number> 
  
  constructor(private productService: ProductService){
    this.counter= this.productService.getCounter();
    
  }

  

}
