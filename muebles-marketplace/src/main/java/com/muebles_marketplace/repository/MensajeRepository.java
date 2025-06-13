
package com.muebles_marketplace.repository;

import com.muebles_marketplace.model.Mensaje;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MensajeRepository extends JpaRepository<Mensaje, Long> {
}
