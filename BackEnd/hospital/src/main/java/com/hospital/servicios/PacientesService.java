package com.hospital.servicios;

import java.util.List;

import com.hospital.models.Pacientes;

public interface PacientesService {
	public abstract List<Pacientes> listar();
	public abstract Pacientes crearMod(Pacientes data);
	public abstract Boolean Eliminar(Integer id);
}
