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

  constructor(private customerService:CustomersService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe((customers)=>{
        // console.log("ngOnInit: ", customers);
        this.Customers = customers;
      });
  }

}

interface Customers{
  CustomerID: number;
  FirstName:string;
  LastName: string;
  Email: string;
}