package com.hospital.servicios;

import java.util.List;

import com.hospital.models.Hospitales;

public interface HospitalService {
	public abstract List<Hospitales> listar();
	public abstract Hospitales crearMod(Hospitales data);
	public abstract Boolean Eliminar(Integer data);
}
