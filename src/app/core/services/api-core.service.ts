// src/app/core/services/api-core.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../constants/endpoints';
import { Observable } from 'rxjs';
import { BusquedaReservaRequest, ReservaBusquedaResponse } from '../../models/busqueda-reserva.model';
import { MuebleConsultaRequest, MuebleConsultaResponse, MuebleInsertRequest } from '../../models/mueble.model';

@Injectable({
    providedIn: 'root'
})
export class ApiCoreService {
    constructor(private http: HttpClient) {}

    registrarReserva(data: any): Observable<any> {
        return this.http.post(Endpoints.reserva.registrar, data);
    }

    buscarReservas(data: BusquedaReservaRequest): Observable<ReservaBusquedaResponse[]> {
        return this.http.post<ReservaBusquedaResponse[]>(Endpoints.reserva.buscar, data);
    }

    registrarMueble(data: MuebleInsertRequest): Observable<any> {
        return this.http.post(Endpoints.muebles.registrar, data);
    }

    buscarMuebles(data: MuebleConsultaRequest): Observable<MuebleConsultaResponse[]> {
        return this.http.post<MuebleConsultaResponse[]>(Endpoints.muebles.buscar, data);
    }
    obtenerTipos(): Observable<any[]> {
        return this.http.get<any[]>(Endpoints.muebles.tipo);
    }

    obtenerColores(): Observable<any[]> {
        return this.http.get<any[]>(Endpoints.muebles.color);
    }

    obtenerTamanos(): Observable<any[]> {
        return this.http.get<any[]>(Endpoints.muebles.tamano);
    }

    obtenerMateriales(): Observable<any[]> {
        return this.http.get<any[]>(Endpoints.muebles.material);
    }
}
