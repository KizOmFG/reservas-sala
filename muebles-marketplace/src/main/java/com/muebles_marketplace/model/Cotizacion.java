package com.muebles_marketplace.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Cotizacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Usuario cliente;

    @ManyToOne
    @JoinColumn(name = "id_carpintero")
    private Usuario carpintero;

    private String detalles;
    private Double precioPropuesto;
    private String estado;
    private LocalDateTime fechaCreacion;
}