import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1BestItemComponent } from './baitap1-best-item.component';

describe('Baitap1BestItemComponent', () => {
  let component: Baitap1BestItemComponent;
  let fixture: ComponentFixture<Baitap1BestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1BestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1BestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
