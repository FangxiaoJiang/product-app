import { Injectable } from '@angular/core';
import {Product,Conditions} from './product';
import {Products} from './mock-products';
import {Observable} from 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Http} from '@angular/http';

@Injectable()
export class ProductService {
  /*getProducts(): Promise<Product[]> {
    return Promise.resolve(Products);
  } // stub*/
  //private _products=new BehaviorSubject<Product[]>(null);
  //--private _products=Observable.of(Products);
  //--getProducts():Observable<Product[]>{
      //this._products.next(Products);
      //return new BehaviorSubject<Product[]>(Products).asObservable();
      //setTimeout(()=>this._products.next(Products),1000);
      //this._products.next(Products);
      //--return this._products;
  //--}
  private heroesUrl = 'api/heroes';
  constructor(private http: Http) { }
  addProduct(p:Product):void{
    Products.push(p);
  }
  getProduct(id:number):Observable<Product>{
    return Observable.of(Products.find(value=>value.Id===id));
  }
}