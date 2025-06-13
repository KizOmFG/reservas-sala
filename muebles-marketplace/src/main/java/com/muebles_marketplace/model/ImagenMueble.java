package com.muebles_marketplace.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ImagenMueble {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String urlImagen;

    @ManyToOne
    @JoinColumn(name = "id_mueble")
    private Mueble mueble;
}