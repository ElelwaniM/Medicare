import { Component } from '@angular/core';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {
medicine!:Medicine;
constructor(){}
ngOnInit():void{

}

onSubmit()
{}
}
