import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NoFoundComponent } from './no-found/no-found.component';
import { NoLoginGuard } from './no-login.guard';
import { ProjectComponent } from './project/project.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: LoginComponent, canActivate: [ NoLoginGuard ] },
	{ path: 'login', component: LoginComponent, canActivate: [ NoLoginGuard ] },
	{ path: 'home', component: HomeComponent, canActivate: [ LoginGuard ] },
	{ path: 'employee', component: EmployeeComponent, canActivate: [ LoginGuard ] },
	{ path: 'project', component: ProjectComponent, canActivate: [ LoginGuard ] },
	{ path: '**', component: NoFoundComponent, canActivate: [ LoginGuard ] },
];

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		EmployeeComponent,
		ProjectComponent,
		HomeComponent,
		NavbarComponent,
		NavbarComponent,
		NoFoundComponent,
	],
	imports: [ BrowserModule, RouterModule.forRoot(routes), FormsModule, NgbModule ],
	providers: [ LoginGuard, NoLoginGuard ],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
