package com.hospital.servicios.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.models.DoctorEspecialidad;
import com.hospital.repositorios.DoctorEspecialidadRepositorio;
import com.hospital.servicios.DoctorEspecialidadService;

@Service
public class DoctorEspecialidadServiceImpl implements DoctorEspecialidadService {
	@Autowired
	private DoctorEspecialidadRepositorio repositorio;
	
	@Override
	public List<DoctorEspecialidad> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public DoctorEspecialidad crearMod(DoctorEspecialidad data) {
		// TODO Auto-generated method stub
		return repositorio.save(data);
	}

	@Override
	public Boolean Eliminar(Integer id) {
		// TODO Auto-generated method stub
		repositorio.deleteById(id);
		return true;
	}

	@Override
	public List<DoctorEspecialidad> listarPorDoctor(Integer IdDoctor) {
		// TODO Auto-generated method stub
		return repositorio.listarPorDoctor(IdDoctor);
	}

}
