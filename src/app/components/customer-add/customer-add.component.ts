import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomersService } from '../../services/customers.service'
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Location } from '@angular/common';

@Component({
	selector: 'app-customer-add',
	templateUrl: './customer-add.component.pug',
	styleUrls: ['./customer-add.component.css'],
	providers: [CustomersService]

})
export class CustomerAddComponent implements OnInit {

	// customer = {
	//   FirstName: "", Initial: "", LastName: "", 
	//   Email: "", Phone: "", Address: "",
	//   City: "", State: "", ZipCode: ""  
	// }
	// CustomerID: number;
	// FirstName: string; Initial: string; LastName: string; 
	// Email: string; Phone: string; Address: string;
	// City: string; State: string; ZipCode: string

	customer = new Customer(0, '', '', '', '', '', '', '', '', '');

	constructor(
		private customerService: CustomersService,
		private router: Router,
		private location: Location
	) { }

	ngOnInit() {
	}

	addCustomer() {

		this.customer = new Customer(0, this.customer.FirstName, this.customer.Initial,
			this.customer.LastName, this.customer.Email, this.customer.Phone,
			this.customer.Address, this.customer.City, this.customer.State,
			this.customer.ZipCode
		)

		// this.router.navigate(['']);
		this.customerService.postCustomer(this.customer, environment.selectEnv(this.router.url))
			.then((resp) => {
				this.location.back();
			}).catch(err => {
				console.log(err);
			});
	}

}