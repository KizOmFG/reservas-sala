import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-formlayout-demo',
    standalone: true,
    imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule,PanelModule, TableModule],
    template: `<p-fluid>
  <p-panel header="Búsqueda de Asociado" [toggleable]="true" class="mb-4">
    <div class="flex flex-col md:flex-row items-center gap-4">
      <div class="flex-1 mt-5">
        <input pInputText id="asociado" type="text" [(ngModel)]="searchTerm" class="w-full" placeholder="Ingrese nombre del asociado" />
      </div>
      
      <p-button label="Buscar" icon="pi pi-search" class="p-button-primary mt-4" (onClick)="buscarAsociados()"></p-button>
      <p-button label="Exportar Excel" icon="pi pi-file-excel" class="p-button-primary mt-4" (onClick)="exportarExcel()"></p-button>
    </div>
  </p-panel>

  <p-panel header="Lista de Asociados" [toggleable]="true">
    <p-table [value]="asociados" class="p-datatable-sm">
      <ng-template pTemplate="header">
        <tr>
          <th>Activar/Desactivar</th>
          <th>Asociado</th>
          <th>Edad</th>
          <th>Fecha de Ingreso</th>
          <th>Trabajos Realizados</th>
          <th>Estado</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-asociado>
        <tr>
          <td>
            <p-toggleButton
              [(ngModel)]="asociado.activo"
              onLabel="Activo"
              offLabel="Inactivo"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
              (onChange)="cambiarEstado(asociado)"
            ></p-toggleButton>
          </td>
          <td>{{ asociado.nombre }}</td>
          <td>{{ asociado.edad }}</td>
          <td>{{ asociado.fechaIngreso }}</td>
          <td>{{ asociado.trabajosRealizados }}</td>
          <td>
            <p-rating [(ngModel)]="asociado.calificacion" readonly="true" stars="5" cancel="false"></p-rating>
          </td>
        </tr>
      </ng-template>
    </p-table>
  </p-panel>
</p-fluid>
`
})
export class FormLayoutDemo {
  searchTerm: string = '';
asociados = [
  {
    activo: true,
    nombre: 'Juan Pérez',
    edad: 30,
    fechaIngreso: new Date('2022-01-15'),
    trabajosRealizados: 12,
    calificacion: 4
  },
  // más asociados...
];

buscarAsociados() {
  // lógica para buscar asociados por nombre
  console.log('Buscando:', this.searchTerm);
}

exportarExcel() {
  // lógica para exportar a Excel
  console.log('Exportando...');
}

cambiarEstado(asociado: any) {
  // lógica para activar o desactivar asociado
  console.log(`Estado cambiado para ${asociado.nombre}:`, asociado.activo);
}
}
