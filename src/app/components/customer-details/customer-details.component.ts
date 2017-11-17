import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [CustomersService]
  
})
export class CustomerDetailsComponent implements OnInit {

  customer: any;

  constructor(private customerService:CustomersService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCustomer();
  }
  
  getCustomer(){
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id)
      .subscribe((customer)=>{
        this.customer = customer;
      }
    );
  }

  deleteCustomer(id){
    this.customerService.deleteCustomer(id)
    .subscribe((resp)=>{
      if(resp.status == 200){
        this.router.navigate(['']);
      }
    });
  }

}
