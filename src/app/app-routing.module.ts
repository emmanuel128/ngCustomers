import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './components/customers/customers.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { AboutComponent } from './components/about/about.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'home', component: CustomersComponent },
  { path: 'customer-add', component: CustomerAddComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'customer-edit', component: CustomerEditComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
