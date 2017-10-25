import { Component,OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {Router} from '@angular/router';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styles:[`div{
        width:250px
    }`]
    })
export class UserComponent{
    constructor(private userservice:UserService, private router:Router){};

    /*isAdmin:boolean;

    ngOnInit(){
        this.userservice.getLoginState().subscribe(value=>this.isAdmin=value);
        console.log(this.isAdmin);
    }*/

    submit(form){
        this.userservice.comfirm(
            form.value.email,
            form.value.password
        ).subscribe();
        this.router.navigate([""]);
    }
    logout(){
        this.userservice.setLoginState();
    }
}