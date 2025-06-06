import { Component, inject, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputGroupModule } from 'primeng/inputgroup';
import { FluidModule } from 'primeng/fluid';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { ColorPickerModule } from 'primeng/colorpicker';
import { KnobModule } from 'primeng/knob';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TreeSelectModule } from 'primeng/treeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TextareaModule } from 'primeng/textarea';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CountryService } from '../service/country.service';
import { NodeService } from '../service/node.service';
import { TreeNode } from 'primeng/api';
import { Country } from '../service/customer.service';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
@Component({
    selector: 'app-input-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        SelectButtonModule,
        InputGroupModule,
        FluidModule,
        IconFieldModule,
        InputIconModule,
        FloatLabelModule,
        AutoCompleteModule,
        InputNumberModule,
        SliderModule,
        RatingModule,
        ColorPickerModule,
        KnobModule,
        SelectModule,
        DatePickerModule,
        ToggleButtonModule,
        ToggleSwitchModule,
        TreeSelectModule,
        MultiSelectModule,
        ListboxModule,
        InputGroupAddonModule,
        TextareaModule,
        TabViewModule,
        PanelModule,
        TableModule,

    ],
    template: ` <p-fluid>
        <p-tabView [(activeIndex)]="activeTabIndex">
  <p-tabPanel header="Resultado de búsqueda">
    <div class="flex flex-col gap-4">
      <p-panel header="Filtro de búsqueda">
        <div class="flex flex-col md:flex-row items-center gap-4">
      <div class="flex-1 mt-5">
            <input
              pInputText
              id="numeroReclamo"
              [(ngModel)]="filtro.numeroReclamo"
              class="w-full p-inputtext-outlined"
              placeholder="Ingrese Numero de Reclamo" />
          </div>
               <p-button label="Buscar" icon="pi pi-search" class="p-button-primary mt-4" (onClick)="buscar()"></p-button>
      <p-button label="Exportar Excel" icon="pi pi-file-excel" class="p-button-primary mt-4" (onClick)="exportarExcel()"></p-button>
    </div>
      </p-panel>

      <p-panel header="Resultados">
        <p-table [value]="reclamos" [paginator]="true" [rows]="5" responsiveLayout="scroll">
          <ng-template pTemplate="header">
            <tr>
              <th>Número de reclamo</th>
              <th>Asociado</th>
              <th>Fecha de registro</th>
              <th>Estado</th>
              <th>Tiempo del reclamo</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-reclamo>
            <tr>
              <td>
                <button type="button" pButton class="p-button-link p-0" (click)="verDetalle(reclamo)">
  {{ reclamo.numero }}
</button>
              </td>
              <td>{{ reclamo.asociado }}</td>
              <td>{{ reclamo.fecha | date }}</td>
              <td>{{ reclamo.estado }}</td>
              <td>{{ reclamo.tiempo }}</td>
            </tr>
          </ng-template>
        </p-table>
      </p-panel>
    </div>
  </p-tabPanel>

  <p-tabPanel header="Detalle del reclamo">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div class="flex flex-col">
      <label for="cliente" class="mb-1 font-medium">Nombre del cliente</label>
      <input pInputText id="cliente" [(ngModel)]="detalle.cliente" class="w-full p-inputtext-outlined" />
    </div>

    <div class="flex flex-col">
      <label for="asociadoDestino" class="mb-1 font-medium">Asociado destinatario</label>
      <input pInputText id="asociadoDestino" [(ngModel)]="detalle.asociado" class="w-full p-inputtext-outlined" />
    </div>

    <div class="flex flex-col">
      <label for="fechaRegistro" class="mb-1 font-medium">Fecha de registro</label>
      <input pInputText id="fechaRegistro" [(ngModel)]="detalle.fecha" class="w-full p-inputtext-outlined" />
    </div>

    <div class="flex flex-col">
      <label for="estadoReclamo" class="mb-1 font-medium">Estado</label>
      <input pInputText id="estadoReclamo" [(ngModel)]="detalle.estado" class="w-full p-inputtext-outlined" />
    </div>

    <div class="flex flex-col md:col-span-2">
      <label for="observaciones" class="mb-1 font-medium">Observaciones</label>
      <textarea pInputTextarea id="observaciones" [(ngModel)]="detalle.observaciones" rows="3" class="w-full p-inputtext-outlined"></textarea>
    </div>

    <div class="flex flex-col md:col-span-2">
      <label for="detalle" class="mb-1 font-medium">Detalle del reclamo</label>
      <textarea pInputTextarea id="detalle" [(ngModel)]="detalle.detalle" rows="3" class="w-full p-inputtext-outlined"></textarea>
    </div>

    <div class="flex flex-col">
      <label for="motivo" class="mb-1 font-medium">Motivo</label>
      <input pInputText id="motivo" [(ngModel)]="detalle.motivo" class="w-full p-inputtext-outlined" />
    </div>

    <div class="flex flex-col">
      <label for="dni" class="mb-1 font-medium">DNI del reclamante</label>
      <input pInputText id="dni" [(ngModel)]="detalle.dni" class="w-full p-inputtext-outlined" />
    </div>
    
    <div class="md:col-span-2 flex justify-end mt-4">
      <p-button label="Volver a resultados" icon="pi pi-arrow-left" class="p-button-secondary" (onClick)="activeTabIndex = 0"></p-button>
    </div>

  </div>
</p-tabPanel>

</p-tabView>
</p-fluid>`,
    providers: [CountryService, NodeService]
})
export class InputDemo {
    activeTabIndex = 0;

    filtro = {
        numeroReclamo: ''
    };

    reclamos = [
        { numero: 'R-001', asociado: 'Asociado A', fecha: new Date(), estado: 'Pendiente', tiempo: '2 días' },
    ];

    detalle = {
        cliente: '',
        asociado: '',
        fecha: '',
        estado: '',
        observaciones: '',
        detalle: '',
        motivo: '',
        dni: ''
    };

    verDetalle(reclamo: any) {
        this.detalle = {
            cliente: 'Juan Pérez',
            asociado: reclamo.asociado,
            fecha: reclamo.fecha,
            estado: reclamo.estado,
            observaciones: 'Observaciones de ejemplo',
            detalle: 'Descripción completa del reclamo...',
            motivo: 'Demora en el servicio',
            dni: '12345678'
        };
        this.activeTabIndex = 1;
    }

    buscar() {
    }

    exportarExcel() {
    }

}
