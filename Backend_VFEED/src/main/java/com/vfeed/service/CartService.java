package com.vfeed.service;

import com.vfeed.model.Cart;
import com.vfeed.model.CartItem;
import com.vfeed.request.AddCartItemRequest;

public interface CartService {
    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception;

    public CartItem updateCartItem(Long cartItemid,int quantity) throws Exception;

    public Cart removeItemFromCart(Long cartItemId,String jwt) throws Exception;

    public Long calculateCartTotals(Cart cart) throws Exception;

    public Cart findCartById(Long id) throws Exception;

    public Cart findCartByUserId(Long id) throws Exception;

    public Cart clearCart(Long userId) throws Exception;


}
