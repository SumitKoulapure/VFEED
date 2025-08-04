package com.vfeed.service;

import java.util.List;

import com.vfeed.model.Restaurant;
import com.vfeed.model.User;
import com.vfeed.request.CreateRestaurantRequest;

public interface RestaurantService {
	
	public Restaurant createRestaurant(CreateRestaurantRequest req,User user);

	public Restaurant updatedRestaurant(Long restaurantId , CreateRestaurantRequest updatedRestaurant);

	public void deleteRestaurant(Long restaurantId) throws Exception;
	
	public List<Restaurant> getAllRestaurant();
	
	public List<Restaurant> searchRestaurant(String keyword );
	
	public Restaurant findRestaurantById(Long id) throws Exception;	
	
	public Restaurant getRestaurantById(Long userId) throws Exception;	
	
	public RestaurantDto addToFavorites(Long restaurantId,User user)throws Exception;
	
	public Restaurant updateRestaurantStatus(Long id) throws Exception;
	
	
	

}
