export interface ProductoDTO {
  id?: number;  // El id puede ser opcional para productos nuevos
  nombre: string;
  precio: number;
  stock: number;
}
