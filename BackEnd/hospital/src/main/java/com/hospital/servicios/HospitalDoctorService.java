package com.hospital.servicios;

import java.util.List;

import com.hospital.models.HospitalDoctor;

public interface HospitalDoctorService {
	public abstract List<HospitalDoctor> listar();
	public abstract HospitalDoctor crearMod(HospitalDoctor data);
	public abstract Boolean Eliminar(Integer id);
	public abstract List<HospitalDoctor> listarPorHospital(Integer IdHospital);
}
