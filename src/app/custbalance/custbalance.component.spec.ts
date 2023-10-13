import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustbalanceComponent } from './custbalance.component';

describe('CustbalanceComponent', () => {
  let component: CustbalanceComponent;
  let fixture: ComponentFixture<CustbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustbalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
