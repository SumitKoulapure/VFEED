package com.vfeed.model;

import jakarta.persistence.ManyToOne;

public class Orders {

	@ManyToOne
	private Restaurant restaurant;
	
}
