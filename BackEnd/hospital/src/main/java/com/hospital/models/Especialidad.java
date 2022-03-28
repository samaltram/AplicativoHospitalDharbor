package com.hospital.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Especialidad extends Auditable {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer idEspecialidad;
	
	@Column(nullable = false, length = 80) 
	private String nombre;
	
	@Column(nullable = false, length = 80) 
	private String descripcion;
	
	@Column(nullable = false, length = 80) 
	private String icono;

}
