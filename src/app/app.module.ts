import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'dotnet' }, // default

	// .NET
	{ path: 'dotnet', component: CustomersComponent },
	{ path: 'dotnet/add', component: CustomerAddComponent },
	{ path: 'dotnet/details/:id', component: CustomerDetailsComponent },
	{ path: 'dotnet/edit/:id', component: CustomerEditComponent },

	// Node.js
	{ path: 'nodejs', component: CustomersComponent },
	{ path: 'nodejs/add', component: CustomerAddComponent },
	{ path: 'nodejs/details/:id', component: CustomerDetailsComponent },
	{ path: 'nodejs/edit/:id', component: CustomerEditComponent },

	// General
	{ path: 'about', component: AboutComponent },
	{ path: 'calendar', component: CalendarComponent }
];


@NgModule({
	declarations: [
		AppComponent,
		CustomersComponent,
		CustomerAddComponent,
		CustomerDetailsComponent,
		CustomerEditComponent,
		NavbarComponent,
		AboutComponent,
		CalendarComponent,
	],
	imports: [
		BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
