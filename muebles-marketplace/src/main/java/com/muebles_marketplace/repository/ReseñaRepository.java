package com.muebles_marketplace.repository;

import com.muebles_marketplace.model.Reseña;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReseñaRepository extends JpaRepository<Reseña, Long> {
}