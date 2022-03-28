package com.hospital.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hospital.models.HospitalDoctor;

public interface HospitalDoctorRepositorio extends JpaRepository<HospitalDoctor,Integer>{
	
	@Query(value = "select * from hospital_doctor a where a.id_Hospital = :prmIdHospital", nativeQuery = true )
	public abstract List<HospitalDoctor> listarPorHospital(@Param("prmIdHospital")  Integer idHospital);

}
