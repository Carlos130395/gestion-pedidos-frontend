import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/shared/interfaces/producto';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {
  productos: ProductoDTO[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  eliminarProducto(id: number | undefined): void {
    // Verificar si el ID no es undefined antes de llamar al servicio
    if (id !== undefined) {
      this.productoService.eliminarProducto(id).subscribe(() => {
        this.productos = this.productos.filter(producto => producto.id !== id);
      });
    } else {
      console.error('El ID del producto es indefinido');
    }
  }
}
