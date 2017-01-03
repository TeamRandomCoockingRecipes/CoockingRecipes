import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from './service/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private authService: AuthenticationService) { }

    canActivate(): boolean {
        return this.authService.isLogedIn();
    }
}