import { Component,OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import {Product} from './product/product';


@Component({
    selector:"my-app",
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/products">Products</a>
            <a routerLink="/productmanagement">ProductManagement</a>
        </nav>
        <router-outlet></router-outlet>`,
    styleUrls:['./app.component.css']
})

export class AppComponent{
    title = 'Tour of Products';
}