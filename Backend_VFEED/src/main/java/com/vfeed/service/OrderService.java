package com.vfeed.service;

import java.util.List;

import com.stripe.exception.StripeException;
import com.vfeed.Exception.CartException;
import com.vfeed.Exception.OrderException;
import com.vfeed.Exception.RestaurantException;
import com.vfeed.Exception.UserException;
import com.vfeed.model.Order;
import com.vfeed.model.PaymentResponse;
import com.vfeed.model.User;
import com.vfeed.request.CreateOrderRequest;

public interface OrderService {

    public PaymentResponse createOrder(CreateOrderRequest order, User user) throws UserException, RestaurantException, CartException, StripeException;

    public Order updateOrder(Long orderId, String orderStatus) throws OrderException;

    public void cancelOrder(Long orderId) throws OrderException;

    public List<Order> getUserOrders(Long userId) throws OrderException;

    public List<Order> getOrdersOfRestaurant(Long restaurantId,String orderStatus) throws OrderException, RestaurantException;


}
