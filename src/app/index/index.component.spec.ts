import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/order-detail/order-detail.component.spec.ts
import { OrderDetailComponent } from './order-detail.component';

describe('OrderDetailComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailComponent);
=======
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
>>>>>>> dev:src/app/index/index.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
