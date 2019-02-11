import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { DaysComponent } from './component/days/days.component';
import { HomeComponent } from './component/home/home.component';
import { TableComponent } from './component/table/table.component';
import { CardComponent } from './component/card/card.component';
import { VirtualScrollComponent } from './component/virtual-scroll/virtual-scroll.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'days', component: DaysComponent },
  { path: 'table', component: TableComponent },
  { path: 'card', component: CardComponent },
  { path: 'virtual-scroll', component: VirtualScrollComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
