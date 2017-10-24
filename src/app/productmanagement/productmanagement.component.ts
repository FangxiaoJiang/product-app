import { Component,OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';


@Component({
    selector:"my-app",
    template:`
        <h1>{{title}}</h1>
        <nav>
            <div>
                <a routerLink="/add" class='col-1-4'>Add</a>
                <a routerLink="/update" class='col-1-4'>Update</a>
                <a routerLink="/delete" class='col-1-4'>Delete</a>
                <a routerLink="/show" class='col-1-4'>Show</a>
            </div>
        </nav>
        <router-outlet></router-outlet>`,
    styleUrls:['./productmanagement.component.css']
})

export class ProductManageComponent {
    title = 'Product Management';
}