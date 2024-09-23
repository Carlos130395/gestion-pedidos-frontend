import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './page/cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './page/cliente/cliente-form/cliente-form.component';
import { ClienteDetailComponent } from './page/cliente/cliente-detail/cliente-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { ProductoListComponent } from './page/producto/producto-list/producto-list.component';
import { ProductoDetailComponent } from './page/producto/producto-detail/producto-detail.component';
import { ProductoFormComponent } from './page/producto/producto-form/producto-form.component';
import { PedidoListComponent } from './page/pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './page/pedido/pedido-form/pedido-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    ClienteFormComponent,
    ClienteDetailComponent,
    NavBarComponent,
    ProductoListComponent,
    ProductoDetailComponent,
    ProductoFormComponent,
    PedidoListComponent,
    PedidoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
