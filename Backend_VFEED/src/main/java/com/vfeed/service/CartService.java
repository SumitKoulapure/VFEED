package com.vfeed.service;

import com.vfeed.model.CartItem;

public interface CartService {
    public CartItem addItemToCart(AddCartItemRequest req,String jwt) throws Exception;
}
