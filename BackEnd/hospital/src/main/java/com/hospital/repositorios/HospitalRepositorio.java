package com.hospital.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.models.Hospitales;

public interface HospitalRepositorio extends JpaRepository<Hospitales,Integer> {

}
