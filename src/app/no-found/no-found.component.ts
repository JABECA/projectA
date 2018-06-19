import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-no-found',
	templateUrl: './no-found.component.html',
	styleUrls: [ './no-found.component.css' ],
})
export class NoFoundComponent implements OnInit {
	constructor(private Router: Router) {}

	ngOnInit() {
		// do init at here for current route.

		setTimeout((router: Router) => {
			this.Router.navigate([ '/home' ]);
		}, 3000); // 5s
	}
}
