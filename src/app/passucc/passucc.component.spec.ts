import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassuccComponent } from './passucc.component';

describe('PassuccComponent', () => {
  let component: PassuccComponent;
  let fixture: ComponentFixture<PassuccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassuccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
