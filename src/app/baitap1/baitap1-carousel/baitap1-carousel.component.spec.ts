import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1CarouselComponent } from './baitap1-carousel.component';

describe('Baitap1CarouselComponent', () => {
  let component: Baitap1CarouselComponent;
  let fixture: ComponentFixture<Baitap1CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
