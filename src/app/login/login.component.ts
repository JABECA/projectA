import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ],
})
export class LoginComponent implements OnInit {
	constructor(private Router: Router) {}

	ngOnInit() {}

	login(form: NgForm) {
		console.log(form.value);
		const email = form.value.username;
		const password = form.value.password;
		if (email === 'alejandromym@utp.edu.co' && password === '123') {
			localStorage.setItem('email', form.value.username);
			localStorage.setItem('password', form.value.password);
			this.Router.navigate([ '/home' ]);
		} else {
			alert('El Email o Password son incorrectos');
		}
	}
}
