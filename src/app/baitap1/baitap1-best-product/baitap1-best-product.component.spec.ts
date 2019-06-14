import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1BestProductComponent } from './baitap1-best-product.component';

describe('Baitap1BestProductComponent', () => {
  let component: Baitap1BestProductComponent;
  let fixture: ComponentFixture<Baitap1BestProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1BestProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1BestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
