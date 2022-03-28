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

import com.hospital.models.Pacientes;
import com.hospital.servicios.PacientesService;

@RestController
@RequestMapping("paciente")
public class PacientesController {
	@Autowired
	private PacientesService service;
	
	@PostMapping
	private Pacientes guardar(@RequestBody Pacientes data) {
		return service.crearMod(data);
	}
	
	@GetMapping
	private List<Pacientes> listar(){
		return service.listar();
	} 
	
	@PutMapping
	private Pacientes modificar(@RequestBody Pacientes data) {
		return service.crearMod(data);
	}
	
	@DeleteMapping(value = "/{id}")
	private boolean eliminar(@PathVariable("id") Integer id) {
		return service.Eliminar(id);
	}
}
