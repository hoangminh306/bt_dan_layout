import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1PromotionComponent } from './baitap1-promotion.component';

describe('Baitap1PromotionComponent', () => {
  let component: Baitap1PromotionComponent;
  let fixture: ComponentFixture<Baitap1PromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1PromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1PromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
