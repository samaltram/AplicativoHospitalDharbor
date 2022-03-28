package com.hospital.servicios.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.models.Doctores;
import com.hospital.repositorios.DoctoresRepositorio;
import com.hospital.servicios.DoctoresService;
@Service
public class DoctoresServiceImpl implements DoctoresService {
	@Autowired
	private DoctoresRepositorio repositorio;

	@Override
	public List<Doctores> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public Doctores crearMod(Doctores data) {
		// TODO Auto-generated method stub
		return repositorio.save(data);
	}

	@Override
	public Boolean Eliminar(Integer data) {
		// TODO Auto-generated method stub
		repositorio.deleteById(data);
		return true;
	}

}
