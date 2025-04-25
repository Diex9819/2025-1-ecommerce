import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../types';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cards',
  imports: [CurrencyPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() movie:Movie []=[];
  

  carrito:number[]=[];

  constructor(private productService:ProductService){}

  ngOnInit(){
      this.loadCar();
  }

  loadCar(){
      this.carrito=this.productService.getCar();
  }

  addToCar(id:number){
    this.productService.addToCar(id);
    this.loadCar();
  }

  checkCar(id_book:number){
    return this.carrito.includes(id_book);

 }



  

}
