import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthAdminGuard implements CanActivate {
    constructor(private userservice:UserService,private router:Router){};
    canActivate() {
        if(this.userservice.getAdminState())
            return true;
        return this.router.navigate([""]);
    }
}

@Injectable()
export class AuthLoginGuard implements CanActivate {
    constructor(private userservice:UserService,private router:Router){};
    canActivate() {
        if(this.userservice.getLoginState())
            return true;
        return this.router.navigate([""]);
    }
}
