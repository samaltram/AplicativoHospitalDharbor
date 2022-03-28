package com.hospital.servicios.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.models.Especialidad;
import com.hospital.repositorios.EspecialidadRepositorio;
import com.hospital.servicios.EspecialidadService;
@Service
public class EspecialidadServiceImpl implements EspecialidadService{

	@Autowired
	private EspecialidadRepositorio repositorio;
	
	@Override
	public List<Especialidad> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public Especialidad crearMod(Especialidad data) {
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
