package com.muebles_marketplace.controller;

import com.muebles_marketplace.model.Cotizacion;
import com.muebles_marketplace.repository.CotizacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cotizaciones")
@CrossOrigin(origins = "*")
public class CotizacionController {

    @Autowired
    private CotizacionRepository cotizacionRepository;

    @GetMapping
    public List<Cotizacion> listar() {
        return cotizacionRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Cotizacion> obtener(@PathVariable Long id) {
        return cotizacionRepository.findById(id);
    }

    @PostMapping
    public Cotizacion crear(@RequestBody Cotizacion cotizacion) {
        return cotizacionRepository.save(cotizacion);
    }
}