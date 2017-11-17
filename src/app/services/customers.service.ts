import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {

  constructor(public http:Http) { }

  getCustomers(){
    return this.http.get('https://vcustomers-api.azurewebsites.net/api/customers')
      .map(res => res.json());
  }

  getCustomerById(id){
    return this.http.get('https://vcustomers-api.azurewebsites.net/api/customers/' + id)
      .map(res => res.json());
  }

  postCustomer(customer){
    return this.http.post('https://vcustomers-api.azurewebsites.net/api/customers/', customer);
  }

  putCustomer(customer){
    return this.http.put('https://vcustomers-api.azurewebsites.net/api/customers/' + customer.CustomerID, customer);
  }

  deleteCustomer(id){
    return this.http.delete('https://vcustomers-api.azurewebsites.net/api/customers/' + id);
  }
}
