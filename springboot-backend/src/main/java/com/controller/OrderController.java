package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Orders;
import com.repository.OrderRepository;


@RestController
@RequestMapping("/medicare/admin/")
public class OrderController {
	@Autowired
	private OrderRepository orderRepository;
	
	//get all the medicine
	@GetMapping("/orders")
	public List <Orders> getAllOrders(){
		return orderRepository.findAll();
		
	}
}
