export interface PedidoDTO {
  id?: string;
  clienteId: string;
  productosIds: string[];
  total: number;
}
