import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoDTO } from 'src/app/shared/interfaces/pedido';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent {
  pedido: PedidoDTO = { clienteId: '', productosIds: [], total: 0 };

  constructor(private pedidoService: PedidoService, private router: Router) {}

  guardarPedido(): void {
    this.pedidoService.crearPedido(this.pedido).subscribe(() => {
      this.router.navigate(['/pedidos']);
    });
  }
}
