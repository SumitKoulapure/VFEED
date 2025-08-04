package com.vfeed.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;

import com.vfeed.model.Cart;


public interface CartRepository extends JpaRepository<Cart, Long> {

}
