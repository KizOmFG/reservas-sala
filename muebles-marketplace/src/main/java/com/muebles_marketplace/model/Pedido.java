package com.muebles_marketplace.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "id_cotizacion")
    private Cotizacion cotizacion;

    private String estado;
    private LocalDate fechaInicio;
    private LocalDate fechaEntregaEstimada;
}