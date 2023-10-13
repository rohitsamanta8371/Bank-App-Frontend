import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrsuccessComponent } from './trsuccess.component';

describe('TrsuccessComponent', () => {
  let component: TrsuccessComponent;
  let fixture: ComponentFixture<TrsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrsuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
