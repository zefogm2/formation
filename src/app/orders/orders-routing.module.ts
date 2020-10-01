import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrderComponent } from './pages/page-list-order/page-list-order.component';

const routes: Routes = [
  { path:"", component : PageListOrderComponent}
  ,{
    path:"add"
    , component : PageAddOrderComponent
    ,data:{title: "Commandes", subtitle:"Ajout"}
  }
  ,{ path:"edit/:id" , component:PageEditOrderComponent
  ,data:{title: "Commandes", subtitle:"Modification"} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
