package com.vfeed.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vfeed.model.Address;
import com.vfeed.model.Restaurant;
import com.vfeed.model.User;
import com.vfeed.repository.AddressRepository;
import com.vfeed.repository.RestaurantRepository;
import com.vfeed.request.CreateRestaurantRequest;

@Service
public class RestaurantServiceImp implements RestaurantService {

	@Autowired
	private RestaurantRepository restaurantRepository;
	
	@Autowired
	private AddressRepository addressRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Restaurant createRestaurant(CreateRestaurantRequest req, User user) {
		// TODO Auto-generated method stub
		Address address=addressRepository.save(req.getAddress());
		
		
		Restaurant restaurant=new Restaurant();
		
		restaurant.setAddress(address);
		
		restaurant.setImages(req.getImages());
		restaurant.setContactInformation(req.getContactInformation());
		restaurant.setDescription(req.getDescription());
		restaurant.setName(req.getName());
		restaurant.setOpeninghours(req.getOpeningHoures());
		restaurant.setRegisterationDate(LocalDateTime.now());
		restaurant.setOwner(user);
		 
		
		
		
		
		
		return restaurantRepository.save(restaurant);
	}

	@Override
	public Restaurant updatedRestaurant(Long restaurantId, CreateRestaurantRequest updatedRestaurant) {
		// TODO Auto-generated method stub
		
		Restaurant restaurant=findRestaurantById(restaurantId);
		
		if(restaurant.getCuisineType()!=null) {
			restaurant.setCuisineType(updatedRestaurant.getCuisintype());
		}
		
		if(restaurant.getDescription()!=null) {
			restaurant.setDescription(updatedRestaurant.getDescription());
		}
		
		if(restaurant.getName()!=null) {
			restaurant.setName(updatedRestaurant.getName());
		}
		
		
		
		return restaurantRepository.save(restaurant);
	}

	@Override
	public void deleteRestaurant(Long restaurantId) throws Exception {
		// TODO Auto-generated method stub
		
		Restaurant restaurant=findRestaurantById(restaurantId);
		
		restaurantRepository.delete(restaurant);
		
	}

	@Override
	public List<Restaurant> getAllRestaurant() {
		// TODO Auto-generated method stub
		return  restaurantRepository.findAll();
	}

	@Override
	public List<Restaurant> searchRestaurant(String keyword) {
		// TODO Auto-generated method stub
		return restaurantRepository.findBySearchQuery(keyword);
	}

	@Override
	public Restaurant findRestaurantById(Long id) throws Exception {
		// TODO Auto-generated method stub
		
		Optional<Restaurant> opt=restaurantRepository.findById(id);
		
		if(opt.isEmpty())
		{
			throw new Exception("Restaurant not found with id"+id);
		}
		return opt.get();
	}

	@Override
	public Restaurant getRestaurantById(Long userId) throws Exception {
		// TODO Auto-generated method stub
		
		Restaurant restaurant=restaurantRepository.findByOwnerId(userId);
		if(restaurant==null)
		{
			throw new Exception("Restaurant not found with owner id"+userId);
		}
		return restaurant;
	}

	@Override
	public RestaurantDto addToFavorites(Long restaurantId, User user) throws Exception {
		// TODO Auto-generated method stub
		Restaurant restaurant=findRestaurantById(restaurantId);
		
		RestaurantDto dto=new RestaurantDto();
		
		dto.setDescription(restaurant.getDescription());
		dto.setImages(restaurant.getImages());
		dto.setTitle(restaurant.getName());
		dto.setId(restaurantId);
		
		
		if(user.getFavourites().contains(dto))
		{
			user.getFavourites().remove(dto);
		}
		else user.getFavourites().add(dto);
		
		userRepository.save(user);
		return dto;
	}

	@Override
	public Restaurant updateRestaurantStatus(Long id) throws Exception {
		// TODO Auto-generated method stub
		Restaurant restaurant=findRestaurantById(id);
		
		restaurant.setOpen(!restaurant.isOpen());
		
		return restaurantRepository.save(restaurant);
		
		
	}
	
	

}
