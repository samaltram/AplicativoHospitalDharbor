package com.hospital.servicios.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.models.HistorialPaciente;
import com.hospital.repositorios.HistorialPacienteRepositorio;
import com.hospital.servicios.HistorialPacienteService;
@Service
public class HistorialPacienteServiceImpl implements HistorialPacienteService{

	@Autowired
	private HistorialPacienteRepositorio repositorio;
	
	@Override
	public List<HistorialPaciente> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public HistorialPaciente crearMod(HistorialPaciente data) {
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
