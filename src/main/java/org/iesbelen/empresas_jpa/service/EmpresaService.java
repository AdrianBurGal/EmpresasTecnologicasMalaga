package org.iesbelen.empresas_jpa.service;

import org.iesbelen.empresas_jpa.exception.EmpresaNotFoundException;
import org.iesbelen.empresas_jpa.models.Empresa;
import org.iesbelen.empresas_jpa.repository.EmpresaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpresaService {

    private final EmpresaRepository empresaRepository;

    public EmpresaService(EmpresaRepository empresaRepository) {
        this.empresaRepository = empresaRepository;
    }

    public List<Empresa> all() {
        return this.empresaRepository.findAll();
    }

    public Empresa save(Empresa empresa) {
        return this.empresaRepository.save(empresa);
    }

    public Empresa one(Long id) {
        return this.empresaRepository.findById(id)
                .orElseThrow(() -> new EmpresaNotFoundException(id));
    }

    public Empresa replace(Long id, Empresa empresa) {
        return this.empresaRepository.findById(id).map(e ->
                        (id.equals(empresa.getIdEmpresa()) ?
                                this.empresaRepository.save(empresa) : null))
                .orElseThrow(() -> new EmpresaNotFoundException(id));
    }

    public void delete(Long id) {
        this.empresaRepository.findById(id).map(e -> {
            this.empresaRepository.delete(e);
            return e;
        }).orElseThrow(() -> new EmpresaNotFoundException(id));
    }
}
