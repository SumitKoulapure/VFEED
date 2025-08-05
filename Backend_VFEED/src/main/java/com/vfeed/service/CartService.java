package com.vfeed.service;

import com.vfeed.Exception.CartException;
import com.vfeed.Exception.CartItemException;
import com.vfeed.Exception.FoodException;
import com.vfeed.Exception.UserException;
import com.vfeed.model.Cart;
import com.vfeed.model.CartItem;
import com.vfeed.request.AddCartItemRequest;

public interface CartSerive {

    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws UserException, FoodException, CartException, CartItemException;

    public CartItem updateCartItemQuantity(Long cartItemId,int quantity) throws CartItemException;

    public Cart removeItemFromCart(Long cartItemId, String jwt) throws UserException, CartException, CartItemException;

    public Long calculateCartTotals(Cart cart) throws UserException;

    public Cart findCartById(Long id) throws CartException;

    public Cart findCartByUserId(Long userId) throws CartException, UserException;

    public Cart clearCart(Long userId) throws CartException, UserException;




}
