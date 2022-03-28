package com.hospital.servicios;

import java.util.List;

import com.hospital.models.HistorialPaciente;

public interface HistorialPacienteService {
	public abstract List<HistorialPaciente> listar();
	public abstract HistorialPaciente crearMod(HistorialPaciente data);
	public abstract Boolean Eliminar(Integer data);
}
