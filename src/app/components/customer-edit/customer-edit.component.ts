import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service'
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Location } from '@angular/common';

@Component({
	selector: 'app-customer-edit',
	templateUrl: './customer-edit.component.pug',
	styleUrls: ['./customer-edit.component.css'],
	providers: [CustomersService]

})
export class CustomerEditComponent implements OnInit {

	customer: any;

	constructor(
		private customerService: CustomersService,
		private actRoute: ActivatedRoute,
		private router: Router,
		private location: Location
	) { }

	ngOnInit() {
		this.getCustomer();
	}

	getCustomer() {
		let id = this.actRoute.snapshot.paramMap.get('id');
		this.customerService.getCustomerById(id, environment.selectEnv(this.router.url))
			.then((customer) => {
				// console.log(customer);
				this.customer = customer;
			});
	}

	editCustomer() {
		this.customerService.putCustomer(this.customer, environment.selectEnv(this.router.url))
			.then((resp) => {
				this.location.back();
				// this.router.navigate(['']);
			}).catch(err => {
				console.log(err)
			});
	}

}
