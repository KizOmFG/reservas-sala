
package com.muebles_marketplace.controller;

import com.muebles_marketplace.model.Portafolio;
import com.muebles_marketplace.repository.PortafolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/portafolios")
@CrossOrigin(origins = "*")
public class PortafolioController {

    @Autowired
    private PortafolioRepository portafolioRepository;

    @GetMapping
    public List<Portafolio> listar() {
        return portafolioRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Portafolio> obtener(@PathVariable Long id) {
        return portafolioRepository.findById(id);
    }

    @PostMapping
    public Portafolio crear(@RequestBody Portafolio portafolio) {
        return portafolioRepository.save(portafolio);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        portafolioRepository.deleteById(id);
    }
}
