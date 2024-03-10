package org.iesbelen.empresas_jpa.repository;

import org.iesbelen.empresas_jpa.models.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {


}
