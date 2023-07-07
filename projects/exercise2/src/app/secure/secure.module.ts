import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { SecureRoutingModule } from './secure-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SecureComponent],
  imports: [CommonModule, SecureRoutingModule, RouterModule],
})
export class SecureModule {}
