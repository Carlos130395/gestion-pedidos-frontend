import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // Asegúrate de tener el modelo ClienteDTO
import { ClienteDTO } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/api/clientes';  // URL del backend

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  obtenerClientes(): Observable<ClienteDTO[]> {
    return this.http.get<ClienteDTO[]>(this.baseUrl);
  }

  // Obtener un cliente por ID
  obtenerClientePorId(id: number): Observable<ClienteDTO> {
    return this.http.get<ClienteDTO>(`${this.baseUrl}/${id}`);
  }

  // Crear un nuevo cliente
  crearCliente(cliente: ClienteDTO): Observable<ClienteDTO> {
    return this.http.post<ClienteDTO>(this.baseUrl, cliente);
  }

  // Eliminar un cliente por ID
  eliminarCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
