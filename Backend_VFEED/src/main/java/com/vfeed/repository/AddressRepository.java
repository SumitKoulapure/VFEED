package com.vfeed.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vfeed.model.Address;

public interface AddressRepository extends JpaRepository<Address,Long> {
	
	

}
