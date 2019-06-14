import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap1Component } from './baitap1.component';
import { Baitap1HeaderComponent } from './baitap1-header/baitap1-header.component';
import { Baitap1CarouselComponent } from './baitap1-carousel/baitap1-carousel.component';
import { Baitap1BestProductComponent } from './baitap1-best-product/baitap1-best-product.component';
import { Baitap1PromotionComponent } from './baitap1-promotion/baitap1-promotion.component';
import { Baitap1BestItemComponent } from './baitap1-best-product/baitap1-best-item/baitap1-best-item.component';

@NgModule({
  declarations: [Baitap1Component, Baitap1HeaderComponent, Baitap1CarouselComponent, Baitap1BestProductComponent, Baitap1PromotionComponent, Baitap1BestItemComponent],
  exports:[Baitap1Component, Baitap1HeaderComponent, Baitap1CarouselComponent, Baitap1BestProductComponent, Baitap1PromotionComponent],
  imports: [
    CommonModule
  ]
})
export class Baitap1Module { }
