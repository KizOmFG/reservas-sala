import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Menu Principal', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'Gestión de usuarios',
                items: [
                    { label: 'Reservas', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Revisión de reportes o denuncias', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Gestión de contenido',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                  
                    {
                        label: 'Reseñas/Carpinteros',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Verificación de perfiles de carpinteros',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/uikit/table']
                                // routerLink: ['/auth/login']
                            },
                            {
                                label: 'Aprobación de imágenes o portafolios subidos',
                                icon: 'pi pi-fw pi-times-circle',
                                 routerLink: ['/uikit/list']
                                // routerLink: ['/auth/error']
                            },
                            {
                                label: 'Categorías y etiquetas de muebles',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/uikit/tree']
                                // routerLink: ['/auth/access']
                            }
                        ]
                    },
                     {
                        label: 'Generar Reportes',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Realizar Personalizacion de Muebles',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/uikit/overlay']
                                // routerLink: ['/auth/login']
                            },
                            {
                                label: 'Analisis de Personalizacion',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/uikit/misc']
                                //  routerLink: ['/uikit/charts'] graficos 
                            },
                            {
                                label: 'Proceso de Checkout',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/uikit/tree']
                                // routerLink: ['/auth/access']
                            }
                        ]
                    },
                    // {
                    //     label: 'Crud',
                    //     icon: 'pi pi-fw pi-pencil',
                    //     routerLink: ['/pages/crud']
                    // },
                    // {
                    //     label: 'Not Found',
                    //     icon: 'pi pi-fw pi-exclamation-circle',
                    //     routerLink: ['/pages/notfound']
                    // },
                    // {
                    //     label: 'Empty',
                    //     icon: 'pi pi-fw pi-circle-off',
                    //     routerLink: ['/pages/empty']
                    // }
                ]
            },
        ];
    }
}
