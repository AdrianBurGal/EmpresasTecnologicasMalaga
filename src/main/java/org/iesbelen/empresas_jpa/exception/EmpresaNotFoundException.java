package org.iesbelen.empresas_jpa.exception;

public class EmpresaNotFoundException extends RuntimeException {
    public EmpresaNotFoundException(Long id) {
        super("Not found Empresa with id: " + id);
    }
}
