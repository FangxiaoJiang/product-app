import { Injectable } from '@angular/core';
import {Product,Conditions} from './product';
import {Products} from './mock-products';
import {Observable} from 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {
  /*getProducts(): Promise<Product[]> {
    return Promise.resolve(Products);
  } // stub*/
  //private _products=new BehaviorSubject<Product[]>(null);
  constructor(private http:HttpClient){};
  //private _products=Observable.of(Products);
  url="http://localhost:3000/api/Products";
  getProducts():Observable<Product[]>{
      //this._products.next(Products);
      //return new BehaviorSubject<Product[]>(Products).asObservable();
      //setTimeout(()=>this._products.next(Products),1000);
      //this._products.next(Products);

      return this.http.get(this.url).map(
        value=>{
          let temp:Array<Product>=[];
          for(let i=0;i<(value as Array<Product>).length;i++){
            temp[i]=new Product(
              (value as Array<Product>)[i].id,
              (value as Array<Product>)[i].name,
              (value as Array<Product>)[i].description,
              (value as Array<Product>)[i].price,
              (value as Array<Product>)[i].condition,
              (value as Array<Product>)[i].category
            )
          }
          return temp;
        }
      )

      //return this._products;
  }
  /*private heroesUrl = 'api/heroes';
  constructor(private http: Http) {}

  getProducts(): Promise<Product[]> {
    return this.http.get(this.heroesUrl).subscribe(
      response => response.json().data as Hero[]
    )
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }*/

  addProduct(p:Product):void{
    let body={
      "id":+p.id,
      "name":p.name,
      "description":p.description,
      "price":p.price,
      "condition":p.condition,
      "category":p.category
    }
    this.http.post(this.url,body).subscribe();
  }

  updateProduct(p:Product):void{
    let body={
      "id":+p.id,
      "name":p.name,
      "description":p.description,
      "price":p.price,
      "condition":p.condition,
      "category":p.category
    }
    this.http.put(this.url+'/'+p.id,body).subscribe();   
  }

  deleteProduct(p:Product):void{
    this.http.delete(this.url+'/'+p.id).subscribe();   
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get(this.url+'/'+id).map(
      value=>{return new Product(
        (value as Product).id,
        (value as Product).name,
        (value as Product).description,
        (value as Product).price,
        (value as Product).condition,
        (value as Product).category
      )}
    )
  }
}