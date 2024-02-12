import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import {MedicineService} from '../medicine.service'

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class UserMedicineListComponent {
  medicines!: Medicine[] ;
  
  constructor(private medicineService : MedicineService) {}

  ngOnInit(): void {
    //this.getMedicine();
    this.medicines = [
      {
        MedicineId: 1,
        ProductName: "Paracetamol",
        PharmaCompany: "Johnson & Johnson",
        Dosage: "500mg",
        Quantity: 1000,
        Price: 299,
        IsActive: "true",
        Description: "Paracetamol is a commonly used pain reliever and fever reducer."
      },
      {
        MedicineId: 2,
        ProductName: "Amoxicillin",
        PharmaCompany: "Pfizer",
        Dosage: "250mg",
        Quantity: 500,
        Price: 150,
        IsActive: "true",
        Description: "Amoxicillin is an antibiotic used to treat various bacterial infections."
      },
      {
        MedicineId: 3,
        ProductName: "Lisinopril",
        PharmaCompany: "Novartis",
        Dosage: "10mg",
        Quantity: 200,
        Price: 250,
        IsActive: "true",
        Description: "Lisinopril is a medication used to treat high blood pressure and heart failure."
      },
      {
        MedicineId: 4,
        ProductName: "Omeprazole",
        PharmaCompany: "AstraZeneca",
        Dosage: "20mg",
        Quantity: 300,
        Price: 499,
        IsActive: "true",
        Description: "Omeprazole is a proton pump inhibitor used to reduce stomach acid production."
      }
    ];
    
    
    

}
  getMedicine() {
    this.medicineService.geeMedicineList().subscribe(data=>{ 
      this.medicines=data;
    }
      )
  }
}
