import { Component,OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import {User} from './user/user';
import {UserService} from './user/user.service';
import {ProductService} from './product/product.service';

@Component({
    selector:"my-app",
    template:`
        <h1>{{title}}</h1>
        <user></user>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/products">Products</a>
            <a *ngIf='userservice.getAdminState()' routerLink="/productmanagement">ProductManagement</a>
            <a *ngIf='!userservice.getLoginState()' routerLink="/register">Register</a>
            <a *ngIf='userservice.getLoginState()' routerLink="/user">User</a>
        </nav>
        <router-outlet></router-outlet>`,
    styleUrls:['./app.component.css']
})

export class AppComponent{
    title = 'Tour of Products';
    constructor(private userservice:UserService,private producetservice:ProductService){};
}