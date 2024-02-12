import { Component } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  orders!: Order[];
  
  constructor() {}

  ngOnInit(): void {
    // Create dummy data
    this.orders = [
      {
        OrderId: 1,
        UserId: 1,
        MedicineId: 1,
        Quantity: 5,
        OrderTime: new Date()
      },
      {
        OrderId: 2,
        UserId: 2,
        MedicineId: 2,
        Quantity: 3,
        OrderTime: new Date()
      },
      {
        OrderId: 3,
        UserId: 1,
        MedicineId: 3,
        Quantity: 2,
        OrderTime: new Date()
      },
      {
        OrderId: 4,
        UserId: 3,
        MedicineId: 1,
        Quantity: 1,
        OrderTime: new Date()
      },
      {
        OrderId: 5,
        UserId: 2,
        MedicineId: 4,
        Quantity: 4,
        OrderTime: new Date()
      },
      {
        OrderId: 6,
        UserId: 3,
        MedicineId: 3,
        Quantity: 3,
        OrderTime: new Date()
      }
    ];
    
  }
}


