import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockOrdersComponent } from './mock-orders.component';

describe('MockOrdersComponent', () => {
  let component: MockOrdersComponent;
  let fixture: ComponentFixture<MockOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
