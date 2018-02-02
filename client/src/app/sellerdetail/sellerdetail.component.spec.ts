import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerdetailComponent } from './sellerdetail.component';

describe('SellerdetailComponent', () => {
  let component: SellerdetailComponent;
  let fixture: ComponentFixture<SellerdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
