package com.hospital.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.models.Pacientes;

public interface PacientesRepositorio extends JpaRepository<Pacientes,Integer> {

}
