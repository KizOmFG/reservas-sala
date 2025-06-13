package com.muebles_marketplace.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data

public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String correo;
    private String contraseña;
    private String rol;
    private String telefono;
    private String direccion;
    private String distrito;
    
    
}