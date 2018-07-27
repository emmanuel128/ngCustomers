import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { catchError, map, tap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {

	private url: string = 'https://vcustomers-api.azurewebsites.net/api'

	constructor(public http: Http) { }

	getCustomers(url?) {
		if (url) {
			this.url = url
		}
		return this.http.get(`${this.url}/customers`)
			.toPromise()
			.then(res => res.json());
	}

	getCustomerById(id, url?: string) {
		if (url) {
			this.url = url
		}
		return this.http.get(`${this.url}/customers/${id}`)
			.toPromise()
			.then(res => res.json());
	}

	postCustomer(customer, url?: string) {
		if (url) {
			this.url = url
		}
		return this.http.post(`${this.url}/customers/`, customer)
			.toPromise()
			.then(res => res.json());
	}

	putCustomer(customer, url?: string) {
		if (url) {
			this.url = url
		}
		return this.http.put(`${this.url}/customers/${customer.CustomerID}`, customer)
			.toPromise()
			.then(res => res.json());
	}

	deleteCustomer(id, url?: string) {
		if (url) {
			this.url = url
		}
		return this.http.delete(`${this.url}/customers/${id}`)
			.toPromise()
			.then(res => res.json());
	}
}
