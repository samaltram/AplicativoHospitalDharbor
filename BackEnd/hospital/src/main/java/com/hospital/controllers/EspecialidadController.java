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

import com.hospital.models.Especialidad;
import com.hospital.servicios.EspecialidadService;

@RestController
@RequestMapping("especialidad")
public class EspecialidadController {
	
	@Autowired
	private EspecialidadService service;
	
	@PostMapping
	private Especialidad guardar(@RequestBody Especialidad data) {
		return service.crearMod(data);
	}
	
	@GetMapping
	private List<Especialidad> listar(){
		return service.listar();
	} 
	
	@PutMapping
	private Especialidad modificar(@RequestBody Especialidad data) {
		return service.crearMod(data);
	}
	
	@DeleteMapping(value = "/{id}")
	private boolean eliminar(@PathVariable("id") Integer id) {
		return service.Eliminar(id);
	}
}
