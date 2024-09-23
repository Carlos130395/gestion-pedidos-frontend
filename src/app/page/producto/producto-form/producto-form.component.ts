import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoDTO } from 'src/app/shared/interfaces/producto';
import { ProductoService } from 'src/app/shared/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent implements OnInit {
  producto: ProductoDTO = { id: 0, nombre: '', precio: 0, stock: 0 };
  esNuevo: boolean = true;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esNuevo = false;
      this.productoService.obtenerProductoPorId(+id).subscribe((producto) => {
        this.producto = producto;
      });
    }
  }

  guardarProducto(): void {
    if (this.esNuevo) {
      this.productoService.crearProducto(this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    }
  }
}
