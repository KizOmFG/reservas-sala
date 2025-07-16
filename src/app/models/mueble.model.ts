// src/app/models/mueble.model.ts

export interface MuebleInsertRequest {
  nombre: string;
  idTipo: number;
  idColor: number;
  idTamano: number;
  idMaterial: number;
  precio: number;
  stock: number;
  descripcion: string;
}

export interface MuebleConsultaRequest {
  idTipo: number | null;
  idColor: number | null;
  idTamano: number | null;
  idMaterial: number | null;
}

export interface MuebleConsultaResponse {
  idMueble: number;
  nombre: string;
  tipo: string;
  color: string;
  tamano: string;
  material: string;
  precio: number;
  stock: number;
  fechaCreacion: string;
  descripcion: string;
}
