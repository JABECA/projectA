import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: [ './project.component.css' ],
})
export class ProjectComponent implements OnInit {
	model: any = {};
	model2: any = {};
	hideUpdate = true;
	msg = '';
	myValue;

	projects = [
		{
			id: 1,
			name: 'App Angular',
			teamSize: 10,
			clientName: 'IBM',
		},
		{
			id: 2,
			name: 'App JavaScrip',
			teamSize: 10,
			clientName: 'IBM',
		},
		{
			id: 3,
			name: 'App PHP',
			teamSize: 10,
			clientName: 'IBM',
		},
		{
			id: 4,
			name: 'App MongoDB',
			teamSize: 10,
			clientName: 'IBM',
		},
		{
			id: 5,
			name: 'App Mobil IOnic',
			teamSize: 10,
			clientName: 'IBM',
		},
		{
			id: 6,
			name: 'App Mobil restaurant',
			teamSize: 10,
			clientName: 'IBM',
		},
	];
	constructor() {}

	ngOnInit() {}

	addProject(): void {
		this.projects.push(this.model);
		this.msg = 'Field add';
	}

	deleteProject(i): void {
		const answer = confirm('Are you sure to erase data?');
		if (answer) {
			this.projects.splice(i, 1);
			this.msg = 'Field removed';
		}
	}

	editProject(i): void {
		this.hideUpdate = false;
		this.model2.id = this.projects[i].id;
		this.model2.name = this.projects[i].name;
		this.model2.teamSize = this.projects[i].teamSize;
		this.model2.clientName = this.projects[i].clientName;

		this.myValue = i;
	}

	updateProject(): void {
		const i = this.myValue;
		for (let j = 0; j < this.projects.length; j++) {
			if (i === j) {
				this.projects[i] = this.model2;
				this.msg = 'campo actualizado';
				this.model2 = {};
			}
		}
	}

	closeAlert(): void {
		this.msg = '';
	}
}
