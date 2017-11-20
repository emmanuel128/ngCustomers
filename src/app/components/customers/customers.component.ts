import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomersService]
})
export class CustomersComponent implements OnInit {
  
  Customers: any[];
  filterInput: string = "";

  constructor(private customerService:CustomersService) { }

  ngOnInit() {
    // console.log(this.filterInput)
    this.customerService.getCustomers()
      .subscribe((customers)=>{
        // console.log("ngOnInit: ", customers);
        this.Customers = customers;
      });
  }

  filterBy(list, value){
    // console.log(value);
    value = value.toUpperCase();
    return list.filter(function(customer){
      return customer.FirstName.toUpperCase().includes(value) ||
             customer.LastName.toUpperCase().includes(value) ||
             customer.Email.toUpperCase().includes(value)
      // return ( customer.LastName.toUpperCase().indexOf(value) || customer.FirstName.toUpperCase().indexOf(value) ) > -1;
    });
  }
}

interface Customers{
  CustomerID: number;
  FirstName:string;
  LastName: string;
  Email: string;
}