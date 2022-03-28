package com.hospital.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
public class Doctores extends Auditable {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer idDoctor;
	
	@Column(nullable = false, length = 80) 
	private String nombres;
	
	@Column(nullable = false, length = 80) 
	private String apellidos;
	
	@Temporal(TemporalType.DATE)
	private Date fechaNacimiento;
	
	@Column(nullable = false, length = 80) 
	private String direccion;
	
	@Column(nullable = false, length = 80) 
	private String foto;
}
