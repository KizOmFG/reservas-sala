import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiCoreService } from '../../../core/services/api-core.service';
import { MuebleConsultaRequest, MuebleConsultaResponse, MuebleInsertRequest } from '../../../models/mueble.model';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-crear-muebles',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, 
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    PanelModule,
    TabViewModule,
    TableModule,
    InputTextModule],
  templateUrl: './crear-muebles.component.html',
  styleUrls: ['./crear-muebles.component.scss']
})
export class CrearMueblesComponent implements OnInit {

  activeTabIndex = 0;

  // Filtros para buscar muebles
  filtro: MuebleConsultaRequest = {
    idTipo: null,
    idColor: null,
    idTamano: null,
    idMaterial: null
  };

  // Resultados
  muebles: MuebleConsultaResponse[] = [];

  // Catálogos en duro
  tipos = [
    { id: 1, nombre: 'Silla' },
    { id: 2, nombre: 'Mesa' },
    { id: 3, nombre: 'Armario' },
    { id: 4, nombre: 'Sofá' }
  ];

  colores = [
    { id: 1, nombre: 'Blanco' },
    { id: 2, nombre: 'Negro' },
    { id: 3, nombre: 'Madera' },
    { id: 4, nombre: 'Azul' }
  ];

  tamanos = [
    { id: 1, descripcion: 'Pequeño' },
    { id: 2, descripcion: 'Mediano' },
    { id: 3, descripcion: 'Grande' },
    { id: 4, descripcion: 'Extra Grande' }
  ];

  materiales = [
    { id: 1, nombre: 'Madera' },
    { id: 2, nombre: 'Metal' },
    { id: 3, nombre: 'Vidrio' },
    { id: 4, nombre: 'Plástico' }
  ];

  // Datos para registrar nuevo mueble
  nuevoMueble: MuebleInsertRequest = {
    nombre: '',
    idTipo: 0,
    idColor: 0,
    idTamano: 0,
    idMaterial: 0,
    precio: 0,
    stock: 0,
    descripcion: ''
  };

  constructor(private api: ApiCoreService) {}

  ngOnInit(): void {
    // Desactivamos la llamada al backend
    // this.obtenerCatalogos();
  }

  // Método desactivado
  obtenerCatalogos(): void {
    // this.api.obtenerTipos().subscribe({
    //   next: (data) => this.tipos = data,
    //   error: (err) => console.error('Error al cargar tipos', err)
    // });
    // this.api.obtenerColores().subscribe({
    //   next: (data) => this.colores = data,
    //   error: (err) => console.error('Error al cargar colores', err)
    // });
    // this.api.obtenerTamanos().subscribe({
    //   next: (data) => this.tamanos = data,
    //   error: (err) => console.error('Error al cargar tamaños', err)
    // });
    // this.api.obtenerMateriales().subscribe({
    //   next: (data) => this.materiales = data,
    //   error: (err) => console.error('Error al cargar materiales', err)
    // });
  }

  buscarMuebles(): void {
    this.api.buscarMuebles(this.filtro).subscribe({
      next: (data) => this.muebles = data,
      error: (err) => console.error('Error al buscar muebles', err)
    });
  }

  registrarMueble(): void {
    this.api.registrarMueble(this.nuevoMueble).subscribe({
      next: () => {
        alert('Mueble registrado correctamente');
        this.activeTabIndex = 0;
        this.buscarMuebles();
        this.resetearFormulario();
      },
      error: (err) => console.error('Error al registrar mueble', err)
    });
  }

  irATab2(): void {
    this.activeTabIndex = 1;
  }

  resetearFormulario(): void {
    this.nuevoMueble = {
      nombre: '',
      idTipo: 0,
      idColor: 0,
      idTamano: 0,
      idMaterial: 0,
      precio: 0,
      stock: 0,
      descripcion: ''
    };
  }
}
