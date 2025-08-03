package com.vfeed.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne //Many order have same user
	private User customer;

	@JsonIgnore
	// Whenever we fetch the order object that time we dont need restaurant object in order so we used here @JsonIgnore
	@ManyToOne //One restaurant have many order i.e Many order have same restaurant
	private Restaurant restaurant; // From which restaurant customer made this order

	private Long totalAmount;

	private String orderStatus;

	private Date createdAt;

	@ManyToOne //Many orders have same address
	private Address deliveryAddress;

	@OneToMany // one order have many items
	private List<OrderItem> items;

//    private Payment payment;

	private int totalItem;

	private int totalPrice;
	
}
