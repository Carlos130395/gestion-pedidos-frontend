import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './page/cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './page/cliente/cliente-form/cliente-form.component';
import { ClienteDetailComponent } from './page/cliente/cliente-detail/cliente-detail.component';
import { ProductoListComponent } from './page/producto/producto-list/producto-list.component';
import { ProductoFormComponent } from './page/producto/producto-form/producto-form.component';
import { ProductoDetailComponent } from './page/producto/producto-detail/producto-detail.component';
import { PedidoListComponent } from './page/pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './page/pedido/pedido-form/pedido-form.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/nuevo', component: ClienteFormComponent },
  { path: 'clientes/:id', component: ClienteDetailComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/nuevo', component: ProductoFormComponent },
  { path: 'productos/:id', component: ProductoDetailComponent },
  { path: 'pedidos', component: PedidoListComponent },
  { path: 'pedidos/nuevo', component: PedidoFormComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
