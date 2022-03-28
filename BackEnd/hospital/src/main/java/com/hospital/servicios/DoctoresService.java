package com.hospital.servicios;

import java.util.List;

import com.hospital.models.Doctores;

public interface DoctoresService {
	public abstract List<Doctores> listar();
	public abstract Doctores crearMod(Doctores data);
	public abstract Boolean Eliminar(Integer data);
}
