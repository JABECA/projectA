import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
} from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class LoginGuard implements CanActivate {
	constructor(private Router: Router) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> | Promise<boolean> | boolean {
		if (localStorage.getItem('email') === null) {
			this.Router.navigate([ '/login' ]);
			return false;
		} else {
			return true;
		}
	}
}
