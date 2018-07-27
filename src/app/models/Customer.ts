export class Customer {

  constructor(
    public CustomerID: number,
    public FirstName: string,
    public Initial: string,
    public LastName: string,
    public Email: string,
    public Phone: string,
    public Address: string,
    public City: string,
    public State: string,
    public ZipCode: string,
  ) { }

}

export interface NodeCustomer {
  _id: number,
  FirstName: string,
  Initial?: string,
  LastName: string,
  Email: string,
  Phone: string,
  Address: string,
  City: string,
  State: string,
  ZipCode: string,
}