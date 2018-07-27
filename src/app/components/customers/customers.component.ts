import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service'
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-customers',
	templateUrl: './customers.component.pug',
	styleUrls: ['./customers.component.css'],
	providers: [CustomersService]
})
export class CustomersComponent implements OnInit {

	Customers: any[];
	filterInput: string = "";

	constructor(
		private customerService: CustomersService,
		private router: Router
	) { }

	ngOnInit() {
		this.customerService.getCustomers(environment.selectEnv(this.router.url))
			.then((customers) => {
				// console.log("ngOnInit: ", customers);
				this.Customers = customers;
			});
	}

	filterBy(list, value) {
		if (!list) { return; }
		value = value.toUpperCase();
		return list.filter(function (customer) {
			return customer.FirstName.toUpperCase().includes(value) ||
				customer.LastName.toUpperCase().includes(value) ||
				customer.Email.toUpperCase().includes(value)
			// return ( customer.LastName.toUpperCase().indexOf(value) || customer.FirstName.toUpperCase().indexOf(value) ) > -1;
		});
	}
}

interface Customers {
	CustomerID: number;
	FirstName: string;
	LastName: string;
	Email: string;
}