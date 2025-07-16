export interface BusquedaReservaRequest {
  codigoReserva: string;
  codigoPago: string;
  fechaInicio: string; // formato ISO: yyyy-MM-ddTHH:mm:ss
  fechaFin: string;
}

export interface ReservaBusquedaResponse {
  id: number;
  codigoReserva: string;
  codigoPago: string;
  nombre: string;
  apellido: string;
  dni: string;
  direccion: string;
  celular: string;
  correo: string;
  tipoMueble: string;
  color: string;
  tamano: string;
  cantidad: number;
  fechaCreacion: string;
  totalRegistros: number;
}
