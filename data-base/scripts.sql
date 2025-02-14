Base de Datos - MySQL TESOROS

CREATE DATABASE tesoros_de_mi_tierra;

CREATE TABLE clientes(
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(50),
    email VARCHAR(50),
    contrasena VARCHAR(50),
    telefono VARCHAR(15)
);


CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio DECIMAL(10,3),
    region VARCHAR(50),
    stock INT,
    imagen MEDIUMTEXT
    );


CREATE TABLE pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE ,
    direccion VARCHAR(100),
    total DECIMAL,
	cantidad_comprada INT,
  );

CREATE TABLE metodo_de_pago(
	id_metodo_pago int AUTO_INCREMENT PRIMARY KEY,
    tipo_pago VARCHAR(50) NOT NULL,
    estado_pago VARCHAR(50) NOT NULL,
    monto DECIMAL(10,3) NOT NULL,
    fecha_pago DATE NOT NULL
    );

CREATE TABLE producto_pedido(
    id_producto_pedido int AUTO_INCREMENT PRIMARY KEY,
    cantidad int NOT null);


ALTER TABLE producto_pedido
ADD COLUMN pedido_id INT,
ADD FOREIGN KEY (pedido_id) REFERENCES pedido(id_pedido);
 
ALTER TABLE producto_pedido
ADD COLUMN producto_id INT,
ADD FOREIGN KEY (producto_id) REFERENCES productos(id_producto);

ALTER TABLE pedido
ADD COLUMN metodo_de_pago_id INT,
ADD FOREIGN KEY (metodo_de_pago_id) REFERENCES metodo_de_pago(id_metodo_pago);

INSERT INTO clientes(nombre_completo,email,contrasena,telefono) VALUES
("DANIELA OSPINA","DANIELA@GMAIL.COM","***********","3212133212"),
("JISELA CASTILLO","JISELA@GMAIL.COM","***********","3212394212"),
("JOSE CASTANEDA","IGNACIO@GMAIL.COM","***********","3987688212"),  
("DAVID OSPINA","DANIELA@GMAIL.COM","***********","3212133212"),
("NATALIA SARMIENTO","NATA@GMAIL.COM","***********","3156789087"),


INSERT INTO productos (nombre,descripcion,precio,region,stock,imagen) VALUES
("Sombrero vueltiao","Es uno de los elementos más representativos de la cultura colombiana, tanto a nivel nacional como internacional. Este sombrero colombiano fue diseñado hace más de doscientos años.",60.200,"Region caribe",18,"https://colombia.co/sites/default/files/inline-images/sombrero-vueltiao-colombiano.jpeg"),
("Queso de Paipa",  "Oriundo de esa población boyacense, cuenta con el certificado de origen que respalda la producción artesanal de quesos semi-maduros, con sabor ácido y amargo suave, de aroma rancio y color amarillo pálido.",  "25.000",   "Region Andina", 5, 
  "https://colombia.co/sites/default/files/marca-pais/images/wp-content/uploads/2018/04/El-queso-paipa-es-uno-de-los-productos-colombianos-con-Sello-de-Denominacio%CC%81n-de-Origen-%E2%80%93-Queso-paipa-servido-en-tabla-de-madera-Marca-Pai%CC%81s-Colombia-.png"),
  ("Café Colombiano 5 kilos", "Una taza de café colombiano tiene un perfil típico de sabor suave y versátil de fragancias y sabores, entre otras características que cualquier aficionado al café sabe apreciar. Sus propiedades lo hacen irresistible.",95.000,"Region Andina", 23,"https://colombia.co/sites/default/files/marca-pais/images/wp-content/uploads/2017/06/caf%C3%A9-2r2.png"),
  ("Vajilla de pocillos de Raquira", "Es un conjunto de piezas de cerámica artesanal, originarias de Ráquira, Boyacá, Colombia. Estos pocillos son conocidos por su belleza y calidad, y suelen ser decorados con diseños tradicionales y colores vibrantes.",  65.000,  "Region Andina", 6,   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1QijNYKrUNSqWgjFs05MJ_xLOSi2urav1A&s"),
  ("Mochila Wayúu", "son una expresión auténtica de la cultura y artesanía de este pueblo indígena colombiano. Son tejidas a mano por mujeres Wayúu utilizando técnicas tradicionales y fibras naturales. Cada mochila es única y refleja la creatividad y habilidad&nbsp;de&nbsp;la&nbsp;artesana.", 195.000, "Region Caribe" , 7, "https://artesaniascolombianas.co/wordpress/wp-content/uploads/2017/11/mochila_wayuu_135_2.jpg")


INSERT INTO pedido(fecha, direccion, total,cantidad_comprada, cliente_id, producto_id) VALUES 
(2024-12-03,"calle 12 n° 24- 39",180.600, 3, 1, 1),  
(2024-10-13,"carrera 13 # 25- 38",75.000, 3, 2, 2),  (2024-11-05,"diagonal 14 # 26- 37",285.000, 3, 3, 3),  (2025-01-28,"avenida 15 # 27- 36",130.000, 3, 4, 4),  (2024-02-11,"calle 16 # 28 - 35",195.000, 1, 5, 5)

INSERT INTO metodo_de_pago (tipo_pago) VALUES 
("Tarjeta de credito"),
("Tarjeta de debito"),
("Efectivo"),
("PSE")


UPDATE `pedido` SET `estado` = 'en proceso', `metodo_de_pago_id` = '1' WHERE `pedido`.`id_pedido` = 1; UPDATE `pedido` SET `estado` = 'en proceso', `metodo_de_pago_id` = '4' WHERE `pedido`.`id_pedido` = 2; UPDATE `pedido` SET `estado` = 'pendiente', `metodo_de_pago_id` = '2' WHERE `pedido`.`id_pedido` = 3; UPDATE `pedido` SET `envio` = '1', `estado` = 'entregado', `metodo_de_pago_id` = '3' WHERE `pedido`.`id_pedido` = 4; UPDATE `pedido` SET `envio` = '1', `estado` = 'entregado', `metodo_de_pago_id` = '2' WHERE `pedido`.`id_pedido` = 5;


INSERT INTO `producto_pedido` (`cantidad`, `pedido_id`, `producto_id`) VALUES 
( '3', '1', '1'),
( '3', '2', '2'),
( '4', '4', '4'),
( '3', '3', '3'),
( '3', '5', '5')