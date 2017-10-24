import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthAdminGuard implements CanActivate {
    constructor(private userservice:UserService){};
    canActivate() {
        if(this.userservice.getAdminState)
            return true;
        return false;
    }
}

@Injectable()
export class AuthLoginGuard implements CanActivate {
    constructor(private userservice:UserService){};
    canActivate() {
        if(this.userservice.getLoginState)
            return true;
        return false;
    }
}
