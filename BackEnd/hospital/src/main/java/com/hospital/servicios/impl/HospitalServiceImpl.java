package com.hospital.servicios.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.models.Hospitales;
import com.hospital.repositorios.HospitalRepositorio;
import com.hospital.servicios.HospitalService;
@Service
public class HospitalServiceImpl implements HospitalService{

	@Autowired
	private HospitalRepositorio repositorio;

	@Override
	public List<Hospitales> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public Hospitales crearMod(Hospitales data) {
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
