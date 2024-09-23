import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteDTO } from 'src/app/shared/interfaces/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss']
})
export class ClienteDetailComponent implements OnInit {
  cliente: ClienteDTO | null = null;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService) {}

  ngOnInit(): void {
    // Obtener el ID del cliente desde la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerClientePorId(id);
    }
  }

  // Método para obtener los detalles de un cliente por ID
  obtenerClientePorId(id: string): void {
    this.clienteService.obtenerClientePorId(+id).subscribe(cliente => {
      this.cliente = cliente;
    });
  }
}
