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
import { AppRoutingModule } from './/app-routing.module';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'add', component: CustomerAddComponent },
  { path: 'details/:id', component: CustomerDetailsComponent },
  { path: 'edit/:id', component: CustomerEditComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about2/:id', component: AboutComponent }
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
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, AppRoutingModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
