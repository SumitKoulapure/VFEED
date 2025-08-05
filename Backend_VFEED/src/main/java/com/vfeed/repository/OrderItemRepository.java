package com.vfeed.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vfeed.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
