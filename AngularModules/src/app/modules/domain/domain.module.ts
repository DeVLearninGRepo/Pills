import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [IndexComponent, ComponentOneComponent, ComponentTwoComponent, TestComponent],
  imports: [
    CommonModule,
    DomainRoutingModule
  ]
})
export class DomainModule {
  constructor() {
    console.debug("DomainModule");
  }
 }
