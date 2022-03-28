package com.hospital.servicios;

import java.util.List;

import com.hospital.models.DoctorEspecialidad;

public interface DoctorEspecialidadService {
	public abstract List<DoctorEspecialidad> listar();
	public abstract DoctorEspecialidad crearMod(DoctorEspecialidad data);
	public abstract Boolean Eliminar(Integer data);
	public abstract List<DoctorEspecialidad> listarPorDoctor(Integer IdDoctor);
}
