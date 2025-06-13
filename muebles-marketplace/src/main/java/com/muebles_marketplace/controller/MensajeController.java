
package com.muebles_marketplace.controller;

import com.muebles_marketplace.model.Mensaje;
import com.muebles_marketplace.repository.MensajeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mensajes")
@CrossOrigin(origins = "*")
public class MensajeController {

    @Autowired
    private MensajeRepository mensajeRepository;

    @GetMapping
    public List<Mensaje> listar() {
        return mensajeRepository.findAll();
    }

    @PostMapping
    public Mensaje crear(@RequestBody Mensaje mensaje) {
        return mensajeRepository.save(mensaje);
    }
}
