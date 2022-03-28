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

import com.hospital.models.Hospitales;
import com.hospital.servicios.HospitalService;

@RestController
@RequestMapping("hospital")
public class HospitalController {

	@Autowired
	private HospitalService service;
	
	@PostMapping
	private Hospitales guardar(@RequestBody Hospitales data) {
		return service.crearMod(data);
	}
	
	@GetMapping
	private List<Hospitales> listar(){
		return service.listar();
	} 
	
	@PutMapping
	private Hospitales modificar(@RequestBody Hospitales data) {
		return service.crearMod(data);
	}
	
	@DeleteMapping(value = "/{id}")
	private boolean eliminar(@PathVariable Integer id) {
		return service.Eliminar(id);
	}
}
