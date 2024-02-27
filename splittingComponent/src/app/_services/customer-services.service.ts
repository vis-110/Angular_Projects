import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { count } from 'rxjs';


export class CustomerServicesService {

  customers:Customer[]=[];
  constructor() { }
 
  numberCount :any = 10;

  add(Customer_Name:string){
    const customer = new Customer();
    customer.name = Customer_Name;
    this.customers.push(customer);

  }

  get(){
    return this.customers
  }

  increment(){
    this.numberCount++;
  }

  resetCount(){
    this.customers.length = 0;
  }


  info1: string[]=["Adam Taylor",'E354', 'at@abc.net']

  info2: string[]=["Shawn Wilson",'E673','sw@abc.net']

  info3: string[]=["Mark Fisher",'E865','mf@abc.net']

  getInfo1(){
    return this.info1[2]
  }

  getInfo2(){
    return this.info2
  }

  getInfo3(){
    return this.info3
  }

  // click child component the data push child and child-child

  getInfodetains2:string[] = [];

  addName(value: string):any
  {
    this.getInfodetains2.push(value);
  }

  getAddName(){
    return this.getInfodetains2
  }
}
