DROP DATABASE IF EXISTS empresas;
CREATE DATABASE empresas CHARACTER SET utf8mb4;
USE empresas;

DROP TABLE IF EXISTS empresa;
CREATE TABLE empresa (
    id_empresa INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    localizacion VARCHAR(150),
	web VARCHAR(50),
    descripcion VARCHAR(500),
    foto VARCHAR(50),
    longitud double,
    latitud double
);

INSERT INTO empresa (nombre, localizacion, web, descripcion, foto, longitud, latitud) VALUES
('Oracle', 'C. Severo Ochoa, 55, Campanillas, 29590 Málaga', 'www.oracle.com', 'Oracle ayuda a las empresas a gestionar y analizar sus datos, desarrollar e implementar aplicaciones, y migrar a la nube.', './assets/oracle.png', '-4.554169', '36.73949'),
('Accenture', 'C. Severo Ochoa, 21, Edificio I+D 6, Campanillas, 29590 Málaga', 'www.accenture.com', 'Accenture es una empresa global de servicios profesionales que ayuda a las organizaciones a transformarse digitalmente, optimizar sus operaciones, acelerar el crecimiento de los ingresos y mejorar los servicios al ciudadano.', './assets/accenture.png', '-4.55730', '36.73458'),
('NTT DATA', 'C. Prta del Mar, 18, Distrito Centro, 29005 Málaga', 'www.nttdata.com', 'Ofrecen soluciones informáticas prácticas y escalables a través de un enfoque de consultoría y una profunda experiencia en la industria.', './assets/NTT.png', '-4.422925', '36.718299'),
('Freepik', 'C. Molina Lario, 13, Distrito Centro, 29015 Málaga', 'www.freepikcompany.com', 'Freepik es un banco de imágenes online que ofrece recursos gráficos gratuitos y de pago para proyectos creativos.', './assets/freepik.png', '-4.419780', '36.719357'),
('Vodafone', 'C. Graham Bell, 5, Campanillas, 29590 Málaga', 'www.vodafone.com', 'Se dedican a mantener a la gente conectada y a construir un futuro digital. Ofrecen servicios de telefonía móvil, internet, televisión y fibra óptica para particulares y empresas.', './assets/vodafone.png', '-4.521686', '36.69844'),
('Dekra', 'C. Severo Ochoa, 2, Campanillas, 29590 Maqueda, Málaga', 'www.dekra.es', 'Especializada en ensayos, inspección y certificación. En otras palabras, ayudan a garantizar la seguridad, calidad y sostenibilidad en diversos sectores.', './assets/dekra.png', '-4.553787', '36.736081'),
('Plytix', 'Alameda Principal, 24, planta 2, Distrito Centro, 29005 Málaga', 'www.plytix.com', 'centro neurálgico donde puedes almacenar, organizar y enriquecer todos los detalles de tus productos. Esto facilita la venta en múltiples canales y garantiza que la información sea consistente y precisa en todos lados.','./assets/plytix.png', '-4.423956', '36.717694'),
('TDK', 'C. Severo Ochoa, 66, Campanillas, 29590 Málaga', 'www.tdk-electronics.tdk.com', 'TDK es una corporación multinacional japonesa de electrónica que fabrica componentes electrónicos y medios de grabación y almacenamiento de datos.', './assets/TDK.png', '-4.560266', '36.745541'),
('Indra', 'C. de Marie Curie, 16, Campanillas, 29590 Málaga', 'indra.com', 'Indra ofrece una amplia gama de servicios que abarcan desde la gestión del tráfico hasta la defensa y la seguridad, pasando por la consultoría y la transformación digital.', './assets/indra.png', '-4.55768', '36.735168');