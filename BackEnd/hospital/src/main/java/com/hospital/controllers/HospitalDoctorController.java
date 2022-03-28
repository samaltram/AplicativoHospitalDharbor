package com.hospital.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.models.HospitalDoctor;
import com.hospital.servicios.HospitalDoctorService;

@RestController
@RequestMapping("hospital-doctor")
public class HospitalDoctorController {
	@Autowired
	private HospitalDoctorService service;
	
	@PostMapping
	private HospitalDoctor guardar(@RequestBody HospitalDoctor data) {
		return service.crearMod(data);
	}
	
	@GetMapping
	private List<HospitalDoctor> listar(){
		return service.listar();
	} 
	
	@PutMapping
	private HospitalDoctor modificar(@RequestBody HospitalDoctor data) {
		return service.crearMod(data);
	}
	
	@DeleteMapping(value = "/{id}")
	private boolean eliminar(@PathVariable("id") Integer id) {
		return service.Eliminar(id);
	}
	
	@GetMapping(value = "/hospital/{id}")
	private List<HospitalDoctor> porHospital(@PathVariable("id") Integer id) {
		return service.listarPorHospital(id);
	}
}
