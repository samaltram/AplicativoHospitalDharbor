package com.hospital.servicios.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.models.HospitalDoctor;
import com.hospital.repositorios.HospitalDoctorRepositorio;
import com.hospital.servicios.HospitalDoctorService;
@Service
public class HospitalDoctorServiceImpl implements HospitalDoctorService{

	@Autowired
	
	private HospitalDoctorRepositorio repositorio;
	
	@Override
	public List<HospitalDoctor> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public HospitalDoctor crearMod(HospitalDoctor data) {
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
	public List<HospitalDoctor> listarPorHospital(Integer IdHospital) {
		// TODO Auto-generated method stub
		return repositorio.listarPorHospital(IdHospital);
	}

}
