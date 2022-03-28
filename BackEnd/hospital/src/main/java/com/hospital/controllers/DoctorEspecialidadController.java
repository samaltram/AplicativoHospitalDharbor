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

import com.hospital.models.DoctorEspecialidad;
import com.hospital.servicios.DoctorEspecialidadService;


@RestController
@RequestMapping("doctor-especialidad")
public class DoctorEspecialidadController {
	
	@Autowired
	private DoctorEspecialidadService service;
	
	@PostMapping
	private DoctorEspecialidad guardar(@RequestBody DoctorEspecialidad data) {
		return service.crearMod(data);
	}
	
	@GetMapping
	private List<DoctorEspecialidad> listar(){
		return service.listar();
	}
	
	@GetMapping( value = "/doctor/{id}")
	private List<DoctorEspecialidad> listarPorDoctor(@PathVariable("id") Integer id){
		return service.listar();
	}
	
	@PutMapping
	private DoctorEspecialidad modificar(@RequestBody DoctorEspecialidad data) {
		return service.crearMod(data);
	}
	
	@DeleteMapping(value = "/{id}")
	private boolean eliminar(@PathVariable("id") Integer id) {
		return service.Eliminar(id);
	}
}
