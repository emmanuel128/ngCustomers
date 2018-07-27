import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { catchError, map, tap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {

  public url: string = 'https://vcustomers-api.azurewebsites.net/api/'

  constructor(public http: Http) { }

  getCustomers() {
    return this.http.get(`${this.url}customers`)
      .toPromise()
      .then(res => res.json());
  }

  getCustomerById(id) {
    return this.http.get(`${this.url}customers/${id}`)
      .toPromise()
      .then(res => res.json());
  }

  postCustomer(customer) {
    return this.http.post(`${this.url}customers/`, customer)
    .toPromise();
  }

  putCustomer(customer) {
    return this.http.put(`${this.url}customers/` + customer.CustomerID, customer)
    .toPromise();
  }

  deleteCustomer(id) {
    return this.http.delete(`${this.url}customers/` + id)
    .toPromise();
  }
}
