import { Component } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users!: Users[] ;
  
  constructor() {}

  ngOnInit(): void {
    // Create dummy data
    this.users = [
      {
        UserId: 1,
        Username: 'John Doe',
        Address: '123 Main Street',
        PaymentInfo: 'Credit Card',
        PhoneNumber: '1234567890',
        EmailAddress: 'johndoe@example.com',
        Password: 'password1'
      },
      {
        UserId: 2,
        Username: 'Jane Smith',
        Address: '456 Elm Street',
        PaymentInfo: 'PayPal',
        PhoneNumber: '9876543210',
        EmailAddress: 'janesmith@example.com',
        Password: 'password2'
      },
      {
        UserId: 3,
        Username: 'Michael Johnson',
        Address: '789 Oak Avenue',
        PaymentInfo: 'Debit Card',
        PhoneNumber: '5555555555',
        EmailAddress: 'michaeljohnson@example.com',
        Password: 'password3'
      },
      {
        UserId: 4,
        Username: 'Emily Davis',
        Address: '321 Pine Road',
        PaymentInfo: 'Venmo',
        PhoneNumber: '9999999999',
        EmailAddress: 'emilydavis@example.com',
        Password: 'password4'
      },
      {
        UserId: 5,
        Username: 'David Wilson',
        Address: '567 Maple Lane',
        PaymentInfo: 'Google Pay',
        PhoneNumber: '1111111111',
        EmailAddress: 'davidwilson@example.com',
        Password: 'password5'
      },
      {
        UserId: 6,
        Username: 'Sarah Thompson',
        Address: '890 Cedar Court',
        PaymentInfo: 'Apple Pay',
        PhoneNumber: '2222222222',
        EmailAddress: 'sarahthompson@example.com',
        Password: 'password6'
      },
      {
        UserId: 7,
        Username: 'Robert Anderson',
        Address: '432 Birch Street',
        PaymentInfo: 'Cash',
        PhoneNumber: '3333333333',
        EmailAddress: 'robertanderson@example.com',
        Password: 'password7'
      }
     
    ];
    
  }
}
