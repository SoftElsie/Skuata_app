import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaretakerComponent } from './add-caretaker.component';

describe('AddCaretakerComponent', () => {
  let component: AddCaretakerComponent;
  let fixture: ComponentFixture<AddCaretakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCaretakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCaretakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
