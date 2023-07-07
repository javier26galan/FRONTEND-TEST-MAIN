import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule, RouterModule],
})
export class LazyModule {}
