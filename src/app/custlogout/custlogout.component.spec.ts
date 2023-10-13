import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustlogoutComponent } from './custlogout.component';

describe('CustlogoutComponent', () => {
  let component: CustlogoutComponent;
  let fixture: ComponentFixture<CustlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustlogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
