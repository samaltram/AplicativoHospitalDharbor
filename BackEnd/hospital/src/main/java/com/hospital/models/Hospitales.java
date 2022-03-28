package com.hospital.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Hospitales extends Auditable {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer idHospital;
	
	@Column(nullable = false, length = 80) 
	private String nombre;
}
