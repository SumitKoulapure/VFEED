package com.vfeed.service;

import java.util.List;

import com.vfeed.Exception.FoodException;
import com.vfeed.Exception.RestaurantException;
import com.vfeed.model.IngredientCategory;
import com.vfeed.model.IngredientsItem;
import com.vfeed.model.Food;
import com.vfeed.repository.IngredientsCategoryRepository;

public interface IngredientsService {

    public IngredientCategory createIngredientsCategory(
            String name,Long restaurantId) throws RestaurantException;

    public IngredientCategory findIngredientsCategoryById(Long id) throws Exception;

    public List<IngredientCategory> findIngredientsCategoryByRestaurantId(Long id) throws Exception;

    public List<IngredientsItem> findRestaurantsIngredients(
            Long restaurantId);


    public IngredientsItem createIngredientsItem(Long restaurantId,
                                                 String ingredientName,Long ingredientCategoryId) throws Exception;

    public IngredientsItem updateStoke(Long id) throws Exception;

}
