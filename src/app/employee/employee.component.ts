import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: [ './employee.component.css' ],
})
export class EmployeeComponent implements OnInit {
	model: any = {};
	model2: any = {};
	hideUpdate = true;
	msg = '';
	myValue;

	employees = [
		{
			id: '1',
			name: 'Alejandro',
			company: 'MYM',
			age: '25',
			birthday: '30 mayo',
			favoriteColor: 'red',
			project: 'angular',
		},
		{
			id: '2',
			name: 'Alejandra',
			company: 'Yuxi',
			age: '20',
			birthday: '29 mayo',
			favoriteColor: 'red',
			project: 'angular',
		},
		{
			id: '3',
			name: 'Franki',
			company: 'Choucair',
			age: '23',
			birthday: '15 mayo',
			favoriteColor: 'red',
			project: 'angular',
		},
		{
			id: '4',
			name: 'Alejandro',
			company: 'MYM',
			age: '25',
			birthday: '30 mayo',
			favoriteColor: 'red',
			project: 'angular',
		},
		{
			id: '5',
			name: 'Alejandra',
			company: 'Yuxi',
			age: '20',
			birthday: '29 mayo',
			favoriteColor: 'red',
			project: 'angular',
		},
		{
			id: '6',
			name: 'Franki',
			company: 'Choucair',
			age: '23',
			birthday: '15 mayo',
			favoriteColor: 'red',
			project: 'angular',
		},
	];
	constructor() {}

	ngOnInit() {
		console.log(this.employees[0].id);
	}

	addEmployee(): void {
		this.employees.push(this.model);
		this.msg = 'Field add';
	}

	deleteEmployee(i): void {
		const answer = confirm('Estas seguro querer eliminarlo?');
		if (answer) {
			this.employees.splice(i, 1);
			this.msg = 'Field removed';
		}
	}

	editEmployee(i): void {
		this.hideUpdate = false;
		this.model2.id = this.employees[i].id;
		this.model2.name = this.employees[i].name;
		this.model2.company = this.employees[i].company;
		this.model2.age = this.employees[i].age;
		this.model2.birthday = this.employees[i].birthday;
		this.model2.favoriteColor = this.employees[i].favoriteColor;
		this.model2.project = this.employees[i].project;
		this.myValue = i;
	}

	updateEmployee(): void {
		const i = this.myValue;
		for (let j = 0; j < this.employees.length; j++) {
			if (i === j) {
				this.employees[i] = this.model2;
				this.msg = 'campo actualizado';
				this.model2 = {};
			}
		}
	}

	closeAlert(): void {
		this.msg = '';
	}
}
