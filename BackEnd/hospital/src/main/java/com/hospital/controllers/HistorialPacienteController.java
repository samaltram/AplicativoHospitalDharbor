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

import com.hospital.models.HistorialPaciente;
import com.hospital.servicios.HistorialPacienteService;

@RestController
@RequestMapping("historia-paciente")
public class HistorialPacienteController {

	@Autowired
	private HistorialPacienteService service;
	
	@PostMapping
	private HistorialPaciente guardar(@RequestBody HistorialPaciente data) {
		return service.crearMod(data);
	}
	
	@GetMapping
	private List<HistorialPaciente> listar(){
		return service.listar();
	} 
	
	@PutMapping
	private HistorialPaciente modificar(@RequestBody HistorialPaciente data) {
		return service.crearMod(data);
	}
	
	@DeleteMapping(value = "/{id}")
	private boolean eliminar(@PathVariable("id") Integer id) {
		return service.Eliminar(id);
	}
}
