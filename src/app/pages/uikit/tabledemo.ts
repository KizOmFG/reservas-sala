import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TagModule } from 'primeng/tag';
import { Customer, CustomerService, Representative } from '../service/customer.service';
import { Product, ProductService } from '../service/product.service';

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    selector: 'app-table-demo',
    standalone: true,
    imports: [
        TableModule,
        MultiSelectModule,
        SelectModule,
        InputIconModule,
        TagModule,
        InputTextModule,
        SliderModule,
        ProgressBarModule,
        ToggleButtonModule,
        ToastModule,
        CommonModule,
        FormsModule,
        ButtonModule,
        RatingModule,
        RippleModule,
        IconFieldModule
    ],
    template: ` <div class="card">
            <div class="font-semibold text-xl mb-4">Lista de Asociados</div>
            <p-table
                #dt1
                [value]="customers1"
                dataKey="id"
                [rows]="10"
                [rowHover]="true"
                [showGridlines]="true"
                [paginator]="true"
                [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
                responsiveLayout="scroll"
            >
                <ng-template #caption>
                    <div class="flex justify-between items-center flex-column sm:flex-row">
                        <button pButton label="Clear" class="p-button-outlined mb-2" icon="pi pi-filter-slash" ></button>
                        <p-iconfield iconPosition="left" class="ml-auto">
                            <p-inputicon>
                                <i class="pi pi-search"></i>
                            </p-inputicon>
                            <input pInputText type="text"  placeholder="Search keyword" />
                        </p-iconfield>
                    </div>
                </ng-template>
                <ng-template #header>
                    <tr>
                        <th style="min-width: 12rem">
                            <div class="flex justify-between items-center">
                                Asociado
                                <p-columnFilter type="text" field="name" display="menu" placeholder="Search by name"></p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 12rem">
                            <div class="flex justify-between items-center">
                                Pais
                                <p-columnFilter type="text" field="country.name" display="menu" placeholder="Search by country"></p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 14rem">
                            <div class="flex justify-between items-center">
                                Perfil
                                <p-columnFilter field="representative" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                                    <ng-template #header>
                                        
                                    </ng-template>
                                    <ng-template #filter let-value let-filter="filterCallback">
                                        <p-multiselect [ngModel]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name" styleClass="w-full">
                                            <ng-template let-option #item>
                                                <div class="flex items-center gap-2 w-44">
                                                    <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" width="32" />
                                                    <span>{{ option.name }}</span>
                                                </div>
                                            </ng-template>
                                        </p-multiselect>
                                    </ng-template>
                                </p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 10rem">
                            <div class="flex justify-between items-center">
                                Fecha
                                <p-columnFilter type="date" field="date" display="menu" placeholder="mm/dd/yyyy"></p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 10rem">
                            <div class="flex justify-between items-center">
                                Ingreso Generado
                                <p-columnFilter type="numeric" field="balance" display="menu" currency="USD"></p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 12rem">
                            <div class="flex justify-between items-center">
                                Estado
                                <p-columnFilter field="status" matchMode="equals" display="menu">
                                    <ng-template #filter let-value let-filter="filterCallback">
                                        <p-select [ngModel]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any" [style]="{ 'min-width': '12rem' }">
                                            <ng-template let-option #item>
                                                <span [class]="'customer-badge status-' + option.value">{{ option.label }}</span>
                                            </ng-template>
                                        </p-select>
                                    </ng-template>
                                </p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 12rem">
                            <div class="flex justify-between items-center">
                                Actividad
                                <p-columnFilter field="activity" matchMode="between" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                                    <ng-template #filter let-filter="filterCallback">
                                        <p-slider [ngModel]="activityValues" [range]="true" (onSlideEnd)="filter($event.values)" styleClass="m-3" [style]="{ 'min-width': '12rem' }"></p-slider>
                                        <div class="flex items-center justify-between px-2">
                                            <span>{{ activityValues[0] }}</span>
                                            <span>{{ activityValues[1] }}</span>
                                        </div>
                                    </ng-template>
                                </p-columnFilter>
                            </div>
                        </th>
                        <th style="min-width: 8rem">
                            <div class="flex justify-between items-center">
                                Verificacion
                                <p-columnFilter type="boolean" field="verified" display="menu"></p-columnFilter>
                            </div>
                        </th>
                    </tr>
                </ng-template>
                <ng-template #body let-customer>
                    <tr>
                        <td>
                            {{ customer.name }}
                        </td>
                        <td>
                            <div class="flex items-center gap-2">
                                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" width="30" />
                                <span>{{ customer.country.name }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="flex items-center gap-2">
                                <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                                <span class="image-text">{{ customer.representative.name }}</span>
                            </div>
                        </td>
                        <td>
                            {{ customer.date | date: 'MM/dd/yyyy' }}
                        </td>
                        <td>
                            {{ customer.balance | currency: 'USD' : 'symbol' }}
                        </td>
                        <td>
                            <p-tag [value]="customer.status.toLowerCase()" [severity]="getSeverity(customer.status.toLowerCase())" styleClass="dark:!bg-surface-900" />
                        </td>
                        <td>
                            <p-progressbar [value]="customer.activity" [showValue]="false" [style]="{ height: '0.5rem' }" />
                        </td>
                        <td class="text-center">
                            <p-tag [value]="customer.status.toLowerCase()" [severity]="getSeverity(customer.status.toLowerCase())" styleClass="dark:!bg-surface-900" />
                        </td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="8">No customers found.</td>
                    </tr>
                </ng-template>
                <ng-template #loadingbody>
                    <tr>
                        <td colspan="8">Loading customers data. Please wait.</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        `,
    styles: `
        .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        .p-datatable-scrollable .p-frozen-column {
            font-weight: bold;
        }
    `,
    providers: [ConfirmationService, MessageService, CustomerService, ProductService]
})
export class TableDemo  {
    // En tu componente .ts, define el arreglo `customers1` con info de carpinteros:
customers1 = [
  {
    id: 1,
    name: 'Juan Pérez',
    country: { name: 'Perú', code: 'pe' },
    representative: { name: 'Carlos', image: 'carlos.png' },
    date: new Date(2023, 4, 10),
    balance: 1200,
    status: 'Activo',
    activity: 75,
    verified: true
  },
  {
    id: 2,
    name: 'María González',
    country: { name: 'Perú', code: 'pe' },
    representative: { name: 'Ana', image: 'ana.png' },
    date: new Date(2023, 2, 20),
    balance: 900,
    status: 'Inactivo',
    activity: 40,
    verified: false
  },
  {
    id: 3,
    name: 'Pedro Martínez',
    country: { name: 'Perú', code: 'pe' },
    representative: { name: 'Luis', image: 'luis.png' },
    date: new Date(2023, 5, 5),
    balance: 1500,
    status: 'Pendiente',
    activity: 60,
    verified: true
  },
  {
    id: 4,
    name: 'Lucía Fernández',
    country: { name: 'Perú', code: 'pe' },
    representative: { name: 'Marta', image: 'marta.png' },
    date: new Date(2023, 3, 11),
    balance: 1100,
    status: 'Activo',
    activity: 80,
    verified: true
  },
  {
    id: 5,
    name: 'Jorge Ramírez',
    country: { name: 'Perú', code: 'pe' },
    representative: { name: 'Carlos', image: 'carlos.png' },
    date: new Date(2023, 6, 1),
    balance: 700,
    status: 'Inactivo',
    activity: 30,
    verified: false
  },
  {
    id: 6,
    name: 'Sofía López',
    country: { name: 'Perú', code: 'pe' },
    representative: { name: 'Ana', image: 'ana.png' },
    date: new Date(2023, 1, 22),
    balance: 1300,
    status: 'Activo',
    activity: 90,
    verified: true
  },
  {
    id: 7,
    name: 'Ricardo Díaz',
    country: { name: 'Perú', code: 'pe' },
    representative: { name: 'Luis', image: 'luis.png' },
    date: new Date(2023, 7, 14),
    balance: 850,
    status: 'Pendiente',
    activity: 50,
    verified: false
  },
  {
    id: 8,
    name: 'Marta Gómez',
    country: { name: 'Perú', code: 'pe' },
    representative: { name: 'Marta', image: 'marta.png' },
    date: new Date(2023, 0, 29),
    balance: 1250,
    status: 'Activo',
    activity: 85,
    verified: true
  },
  {
    id: 9,
    name: 'Carlos Núñez',
    country: { name: 'Perú', code: 'pe' },
    representative: { name: 'Carlos', image: 'carlos.png' },
    date: new Date(2023, 8, 7),
    balance: 950,
    status: 'Inactivo',
    activity: 35,
    verified: false
  },
  {
    id: 10,
    name: 'Elena Castillo',
    country: { name: 'Perú', code: 'pe' },
    representative: { name: 'Ana', image: 'ana.png' },
    date: new Date(2023, 4, 19),
    balance: 1400,
    status: 'Activo',
    activity: 95,
    verified: true
  }
];

representatives = [
  { name: 'Carlos', image: 'carlos.png', label: 'Carlos' },
  { name: 'Ana', image: 'ana.png', label: 'Ana' },
  { name: 'Luis', image: 'luis.png', label: 'Luis' },
  { name: 'Marta', image: 'marta.png', label: 'Marta' }
];

// Estados:
statuses = [
  { label: 'Activo', value: 'Activo' },
  { label: 'Inactivo', value: 'Inactivo' },
  { label: 'Pendiente', value: 'Pendiente' }
];

activityValues: number[] = [20, 90];

getSeverity(status: string) {
  switch (status.toLowerCase()) {
    case 'activo':
      return 'success';
    case 'inactivo':
      return 'danger';
    case 'pendiente':
      return 'warning';
    default:
      return 'info';
  }
}

}
