package com.muebles_marketplace.repository;

import com.muebles_marketplace.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}