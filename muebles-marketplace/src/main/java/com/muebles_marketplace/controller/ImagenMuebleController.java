
package com.muebles_marketplace.controller;

import com.muebles_marketplace.model.ImagenMueble;
import com.muebles_marketplace.repository.ImagenMuebleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/imagenes")
@CrossOrigin(origins = "*")
public class ImagenMuebleController {

    @Autowired
    private ImagenMuebleRepository imagenMuebleRepository;

    @GetMapping
    public List<ImagenMueble> listar() {
        return imagenMuebleRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<ImagenMueble> obtener(@PathVariable Long id) {
        return imagenMuebleRepository.findById(id);
    }

    @PostMapping
    public ImagenMueble crear(@RequestBody ImagenMueble imagen) {
        return imagenMuebleRepository.save(imagen);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        imagenMuebleRepository.deleteById(id);
    }
}
