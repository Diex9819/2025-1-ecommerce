import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Movie } from '../../types';
import { CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car',
  imports: [CurrencyPipe],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  myMovieList:Movie[]=[];
  car:number[]=[];

  datosCar:Movie[]=[]; 

  constructor(private productService:ProductService){}

  ngOnInit(){
    this.loadInitialBooks();
    this.loadFavorites();
    this.datosCar = this.myMovieList.filter(movie => this.car.includes(movie._id));

    console.log(this.datosCar);
  }

  loadFavorites(){
    this.car=this.productService.getCar();
    console.log(this.car);
  }

  loadInitialBooks(){
    this.myMovieList=this.productService.getMovies();
    console.log(this.myMovieList);
  }


}
