import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { AdminComponent } from './admin/admin.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [

  {path:'medicines', component:MedicineListComponent},
  {path: 'users',component:UsersListComponent},
  {path:'orders',component:OrderListComponent},
  {path:'create-medicine',component:CreateMedicineComponent},
  {path:'admin',component:AdminComponent},
  {path:'userinfo',component:CreateUserComponent},
  {path:'',redirectTo:'medicines',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
