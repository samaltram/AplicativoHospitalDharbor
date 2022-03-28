package com.hospital.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.models.Especialidad;

public interface EspecialidadRepositorio extends JpaRepository<Especialidad,Integer> {

}
