import { Component } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
user!:Users;
constructor(){}
ngOnInit():void{

}

onSubmit()
{}

}
