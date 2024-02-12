package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.model.Medicine;

import com.repository.MedicineRepository;

@RestController
@RequestMapping("/medicare/admin/")
public class MedicineController {
	
	@Autowired
	private MedicineRepository medicineRepository;
	
	//get all the medicine
	@GetMapping("/medicines")
	public List <Medicine> getAllMedincine(){
		return medicineRepository.findAll();
		
	}

}
