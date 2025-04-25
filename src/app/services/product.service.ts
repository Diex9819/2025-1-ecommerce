import { Injectable, signal } from '@angular/core';
import { Movie } from '../types';
import { data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private moovies:Movie[]=data;

  private count = signal<number>(0);
  getCounter(){
    return this.count;
  }

  incremento(){
    this.count.update(n => n+1);
  }

  decremento(){
    this.count.update(n => n-1);
  }

  reset(){
    this.count.set(0);
  }


  constructor() { }

  public getAllProducts():Movie[]{
    return this.moovies;
  }

  getCar():number[]{
    const carString = localStorage.getItem('car');
    if (carString===null) {
      return[];
    }
    const car = JSON.parse(carString);
    const length = car.length;
    this.count.update(n => length);
    return car;
  } 

  addToCar(id:number){
    this.incremento();
      const car= this.getCar();
      car.push(id);
      localStorage.setItem('car', JSON.stringify(car));
  }

  removeFromCar(id:number){
    this.decremento();
    const favorites= this.getCar();
    const updateMovies= favorites.filter(id_book =>  id_book!==id);
    localStorage.setItem('car', JSON.stringify(updateMovies));
  }

  getMovies(){
    return this.moovies;
  }
}
