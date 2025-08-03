package com.vfeed.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.*;

@Entity
public class Food {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private String description;
	
	private Long price;
	
	
	@ManyToOne
	private Category foodCategory;
	
	@Column(length = 1000)
	@ElementCollection
	private List<String> images;
	
	private boolean available;
	
	@ManyToOne
	private Restaurant restaurant;
	
	private boolean isVegeterian;
	private boolean isSeasonable;
	
	@ManyToMany
	private List<IngredientsItem> ingredients=new ArrayList<>();
	
	 
	private Date creationDate;
	
	
	
	

}
