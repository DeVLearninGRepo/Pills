import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';

const routes: Routes = [
  {
    path: 'domain', component: IndexComponent, children: [
      { path: 'one', component: ComponentOneComponent },
      { path: 'two', component: ComponentTwoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainRoutingModule { }
