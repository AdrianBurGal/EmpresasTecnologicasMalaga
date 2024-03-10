package org.iesbelen.empresas_jpa.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="empresa")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_empresa")
    private Long idEmpresa;

    private String nombre;
    private String localizacion;
    private String web;
    private String descripcion;
    private String foto;
    private double longitud;
    private double latitud;
}
