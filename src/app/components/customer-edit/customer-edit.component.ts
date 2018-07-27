import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.pug',
  styleUrls: ['./customer-edit.component.css'],
  providers: [CustomersService]

})
export class CustomerEditComponent implements OnInit {

  customer: any;

  constructor(private customerService: CustomersService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id)
      .then((customer) => {
        // console.log(customer);
        this.customer = customer;
      }
      );
  }

  editCustomer() {
    this.customerService.putCustomer(this.customer)
      .then((resp) => {
        if (resp.ok) {
          this.router.navigate(['']);
        }
      });
  }

}
