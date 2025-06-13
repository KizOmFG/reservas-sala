package com.muebles_marketplace.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Mueble {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;
    private String descripcion;
    private String imagen;
    private Double precioReferencia;
    private String estado;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_categoria")
    private Categoria categoria;
}