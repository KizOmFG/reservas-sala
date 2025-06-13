package com.muebles_marketplace.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Portafolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String descripcion;
    private String imagenUrl;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
}