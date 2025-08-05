package com.vfeed.request;

import java.util.List;

import com.vfeed.model.Address;
import com.vfeed.model.ContactInformation;

import lombok.Data;

@Data
public class CreateRestaurantRequest {
	private Long id;
	private String name;
	private String description;
	private String cuisintype;
	private Address address;
	private ContactInformation contactInformation;
	private String openingHoures;
	private List<String> images;
	
}
