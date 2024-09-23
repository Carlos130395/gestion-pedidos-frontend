import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteDTO } from 'src/app/shared/interfaces/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
  cliente: ClienteDTO = { id: 0, nombre: '', email: '' };

  constructor(private clienteService: ClienteService, private router: Router) {}

  guardarCliente(): void {
    this.clienteService.crearCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/clientes']);  // Redirige a la lista de clientes después de crear
    });
  }
}
