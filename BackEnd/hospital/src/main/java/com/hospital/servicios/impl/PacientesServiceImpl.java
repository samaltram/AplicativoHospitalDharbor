package com.hospital.servicios.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.models.Pacientes;
import com.hospital.repositorios.PacientesRepositorio;
import com.hospital.servicios.PacientesService;
@Service
public class PacientesServiceImpl implements PacientesService{
	
	@Autowired
	private PacientesRepositorio repositorio;

	@Override
	public List<Pacientes> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public Pacientes crearMod(Pacientes data) {
		// TODO Auto-generated method stub
		return repositorio.save(data);
	}

	@Override
	public Boolean Eliminar(Integer id) {
		// TODO Auto-generated method stub
		repositorio.deleteById(id);
		return true;
	}
	
	

}
