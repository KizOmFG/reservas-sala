import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiCoreService } from '../../../core/services/api-core.service';
import { InputTextModule } from 'primeng/inputtext';
import { FluidModule } from 'primeng/fluid';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { PanelModule } from 'primeng/panel';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { TableModule } from 'primeng/table';
import { ReservaBusquedaResponse } from '../../../models/busqueda-reserva.model';
interface Asociado {
    nombre: string;
    edad: number;
    fechaIngreso: string;
    trabajosRealizados: number;
    calificacion: number;
    activo: boolean;
}
@Component({
    selector: 'app-solicitar-reserva',
    imports: [CommonModule, ReactiveFormsModule, HttpClientModule, InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, PanelModule, TableModule],
    templateUrl: './solicitar-reserva.component.html',
    styleUrl: './solicitar-reserva.component.scss'
})
export class SolicitarReservaComponent {
    formBusqueda!: FormGroup;
    reservas: ReservaBusquedaResponse[] = [];

    constructor(
        private fb: FormBuilder,
        private apiCoreService: ApiCoreService
    ) {}

    ngOnInit(): void {
        this.formBusqueda = this.fb.group({
            codigoReserva: [''],
            codigoPago: [''],
            fechaInicio: ['2024-01-01'],
            fechaFin: ['2025-12-31']
        });
    }

    buscar(): void {
        const filtro = this.formBusqueda.value;
        this.apiCoreService.buscarReservas(filtro).subscribe({
            next: (res) => (this.reservas = res),
            error: (err) => console.error(err)
        });
    }
    exportarExcel(): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.reservas);
  const workbook: XLSX.WorkBook = {
    Sheets: { 'Reservas': worksheet },
    SheetNames: ['Reservas']
  };
  const excelBuffer: any = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array'
  });
  const data: Blob = new Blob([excelBuffer], {
    type: 'application/octet-stream'
  });
  FileSaver.saveAs(data, `reservas_export_${new Date().getTime()}.xlsx`);
}
}
