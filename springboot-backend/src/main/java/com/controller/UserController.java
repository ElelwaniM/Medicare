package com.controller;


import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;
	import com.model.Users;

	import com.repository.UserRepository;

	@RestController
	@RequestMapping("/medicare/admin/")
	public class UserController {
		
		@Autowired
		private UserRepository usersRepository;
		
		//get all the medicine
		@GetMapping("/users")
		public List <Users> getAllUsers(){
			return usersRepository.findAll();
			
		}

	}

