package com.hospital.servicios;

import java.util.List;

import com.hospital.models.Especialidad;

public interface EspecialidadService {
	
	public abstract List<Especialidad> listar();
	public abstract Especialidad crearMod(Especialidad data);
	public abstract Boolean Eliminar(Integer data);
}
