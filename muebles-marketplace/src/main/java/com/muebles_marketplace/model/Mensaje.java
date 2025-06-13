package com.muebles_marketplace.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Mensaje {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_remitente")
    private Usuario remitente;

    @ManyToOne
    @JoinColumn(name = "id_destinatario")
    private Usuario destinatario;

    private String contenido;
    private LocalDateTime fechaEnvio;
}