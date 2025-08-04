package com.vfeed.service;

import com.vfeed.model.Cart;
import com.vfeed.model.CartItem;
import com.vfeed.request.AddCartItemRequest;

public interface CartService {
    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception;

    public CartItem updateCartItem(Long cartItemid,int quantity) throws Exception;

    public Cart removeItemFromCart(Long cartItemId,String jwt) throws Exception;

    
}
