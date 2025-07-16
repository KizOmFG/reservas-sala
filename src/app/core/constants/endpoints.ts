// src/app/core/constants/endpoints.ts

import { environment } from "../../../environments/environment";

export const Endpoints = {
  reserva: {
    registrar: `${environment.apiBaseUrl}/reservas/registrar`,
    buscar: `${environment.apiBaseUrl}/consulta-reservas/buscar`
  },
   muebles: {
    registrar: `${environment.apiBaseUrl}/muebles/registrar`,
    buscar: `${environment.apiBaseUrl}/muebles/buscar`,
    tipo: `${environment.apiBaseUrl}/catalogos/tipos`,
    color: `${environment.apiBaseUrl}/catalogos/colores`,
    tamano: `${environment.apiBaseUrl}/catalogos/tamanos`,
    material: `${environment.apiBaseUrl}/catalogos/materiales`
  }
};

