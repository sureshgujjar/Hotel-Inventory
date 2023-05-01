import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeeComponent } from './empoyee.component';

describe('EmpoyeeComponent', () => {
  let component: EmpoyeeComponent;
  let fixture: ComponentFixture<EmpoyeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoyeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpoyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
