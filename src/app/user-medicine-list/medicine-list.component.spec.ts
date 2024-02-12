import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMedicineListComponent } from './medicine-list.component';

describe('MedicineListComponent', () => {
  let component: UserMedicineListComponent;
  let fixture: ComponentFixture<UserMedicineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMedicineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMedicineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
