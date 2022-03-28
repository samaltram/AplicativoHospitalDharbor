package com.hospital.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hospital.models.DoctorEspecialidad;

public interface DoctorEspecialidadRepositorio extends JpaRepository<DoctorEspecialidad,Integer> {
	
	@Query(value = "select * from doctor_especialidad a where a.idDoctor = :prmIdDoctor", nativeQuery = true )
	public abstract List<DoctorEspecialidad> listarPorDoctor(@Param("prmIdDoctor")  Integer idDoctor);

}
