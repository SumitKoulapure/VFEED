package com.vfeed.service;


import java.util.List;

import com.vfeed.model.Category;

public interface CategoryService {

    public Category createCategory(String name, Long userId);

    public List<Category> findCategoryByRestaurantId(Long restaurantId);

    public Category findCategoryById(Long id);

}
