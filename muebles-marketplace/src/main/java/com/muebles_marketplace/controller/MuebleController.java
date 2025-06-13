package com.muebles_marketplace.controller;

import com.muebles_marketplace.model.Mueble;
import com.muebles_marketplace.repository.MuebleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/muebles")
@CrossOrigin(origins = "*")
public class MuebleController {

    @Autowired
    private MuebleRepository muebleRepository;

    @GetMapping
    public List<Mueble> listar() {
        return muebleRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Mueble> obtener(@PathVariable Long id) {
        return muebleRepository.findById(id);
    }

    @PostMapping
    public Mueble crear(@RequestBody Mueble mueble) {
        return muebleRepository.save(mueble);
    }

    @PutMapping("/{id}")
    public Mueble actualizar(@PathVariable Long id, @RequestBody Mueble muebleActualizado) {
        return muebleRepository.findById(id).map(mueble -> {
            mueble.setTipo(muebleActualizado.getTipo());
            mueble.setDescripcion(muebleActualizado.getDescripcion());
            mueble.setImagen(muebleActualizado.getImagen());
            mueble.setPrecioReferencia(muebleActualizado.getPrecioReferencia());
            mueble.setEstado(muebleActualizado.getEstado());
            mueble.setCategoria(muebleActualizado.getCategoria());
            mueble.setUsuario(muebleActualizado.getUsuario());
            return muebleRepository.save(mueble);
        }).orElseGet(() -> {
            muebleActualizado.setId(id);
            return muebleRepository.save(muebleActualizado);
        });
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        muebleRepository.deleteById(id);
    }
}