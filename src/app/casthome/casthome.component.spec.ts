import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasthomeComponent } from './casthome.component';

describe('CasthomeComponent', () => {
  let component: CasthomeComponent;
  let fixture: ComponentFixture<CasthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasthomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
