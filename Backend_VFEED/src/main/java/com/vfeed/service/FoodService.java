package com.vfeed.service;

import java.util.List;

import com.vfeed.Exception.FoodException;
import com.vfeed.Exception.RestaurantException;
import com.vfeed.model.Category;
import com.vfeed.model.Food;
import com.vfeed.model.Restaurant;
import com.vfeed.request.CreateFoodRequest;

public interface FoodService {

	public Food createFood(CreateFoodRequest req,Category category,
						   Restaurant restaurant) throws FoodException, RestaurantException;

	void deleteFood(Long foodId) throws FoodException;
	
	public List<Food> getRestaurantsFood(Long restaurantId,
			boolean isVegetarian, boolean isNonveg, boolean isSeasonal,String foodCategory) throws FoodException;
	
	public List<Food> searchFood(String keyword);
	
	public Food findFoodById(Long foodId) throws FoodException;

	public Food updateAvailibilityStatus(Long foodId) throws FoodException;
}
