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

import com.hospital.models.Doctores;
import com.hospital.servicios.DoctoresService;

@RestController
@RequestMapping("doctores")
public class DoctoresController {
	@Autowired
	private DoctoresService service;
	
	@PostMapping
	private Doctores guardar(@RequestBody Doctores data) {
		return service.crearMod(data);
	}
	
	@GetMapping
	private List<Doctores> listar(){
		return service.listar();
	} 
	
	@PutMapping
	private Doctores modificar(@RequestBody Doctores data) {
		return service.crearMod(data);
	}
	
	@DeleteMapping(value = "/{id}")
	private boolean eliminar(@PathVariable("id") Integer id) {
		return service.Eliminar(id);
	}

}
