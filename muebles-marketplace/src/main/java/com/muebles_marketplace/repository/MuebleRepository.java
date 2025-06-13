package com.muebles_marketplace.repository;

import com.muebles_marketplace.model.Mueble;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MuebleRepository extends JpaRepository<Mueble, Long> {
}