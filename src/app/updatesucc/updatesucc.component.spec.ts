import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesuccComponent } from './updatesucc.component';

describe('UpdatesuccComponent', () => {
  let component: UpdatesuccComponent;
  let fixture: ComponentFixture<UpdatesuccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesuccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
