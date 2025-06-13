package com.muebles_marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.muebles_marketplace.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}