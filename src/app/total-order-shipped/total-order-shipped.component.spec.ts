import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOrderShippedComponent } from './total-order-shipped.component';

describe('TotalOrderShippedComponent', () => {
  let component: TotalOrderShippedComponent;
  let fixture: ComponentFixture<TotalOrderShippedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalOrderShippedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalOrderShippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
