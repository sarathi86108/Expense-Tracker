import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class ClientLoginGuardService implements CanActivate {
    constructor(public location: Location, public router: Router) {
    }

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }

    isAuthenticated() {
        let isAuth: boolean = false;
        if (typeof localStorage !== 'undefined') {
            isAuth = localStorage.getItem('uId') !== null ? true : false;
        }
        return isAuth;
    }
}
