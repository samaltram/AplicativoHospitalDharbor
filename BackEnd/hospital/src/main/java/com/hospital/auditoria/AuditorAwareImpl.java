package com.hospital.auditoria;

import java.util.Optional;
import org.springframework.data.domain.AuditorAware;

public class AuditorAwareImpl implements AuditorAware<String> {
	
	@Override
	public Optional<String> getCurrentAuditor(){
		// Aqui implementar Usurio logueado
		
		return Optional.of("UsrPrueba");
	}

}
