import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { AdminComponent } from './admin/admin.component';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [
    AppComponent,
    MedicineListComponent,
    UsersListComponent,
    OrderListComponent,
    CreateMedicineComponent,
    AdminComponent,
    CreateUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
