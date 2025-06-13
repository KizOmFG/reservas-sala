package com.muebles_marketplace.controller;

import com.muebles_marketplace.model.Reseña;
import com.muebles_marketplace.repository.ReseñaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resenas")
@CrossOrigin(origins = "*")
public class ReseñaController {

    @Autowired
    private ReseñaRepository reseñaRepository;

    @GetMapping
    public List<Reseña> listar() {
        return reseñaRepository.findAll();
    }

    @PostMapping
    public Reseña crear(@RequestBody Reseña reseña) {
        return reseñaRepository.save(reseña);
    }
}