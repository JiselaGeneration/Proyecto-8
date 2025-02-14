-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 13-02-2025 a las 23:57:51
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tesoros_de_mi_tierra`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nombre_completo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `contrasena` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `telefono` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre_completo`, `email`, `contrasena`, `telefono`) VALUES
(1, 'DANIELA OSPINA', 'DANIELA@GMAIL.COM', '***********', '3212133212'),
(2, 'JISELA CASTILLO', 'JISELA@GMAIL.COM', '***********', '3212394212'),
(3, 'JOSE CASTANEDA', 'IGNACIO@GMAIL.COM', '***********', '3987688212'),
(4, 'DAVID OSPINA', 'DANIELA@GMAIL.COM', '***********', '3212133212'),
(5, 'NATALIA SARMIENTO', 'NATA@GMAIL.COM', '***********', '3156789087');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodo_de_pago`
--

DROP TABLE IF EXISTS `metodo_de_pago`;
CREATE TABLE IF NOT EXISTS `metodo_de_pago` (
  `id_metodo_pago` int NOT NULL AUTO_INCREMENT,
  `tipo_pago` varchar(50) NOT NULL,
  PRIMARY KEY (`id_metodo_pago`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `metodo_de_pago`
--

INSERT INTO `metodo_de_pago` (`id_metodo_pago`, `tipo_pago`) VALUES
(1, 'Tarjeta de credito'),
(2, 'Tarjeta de debito'),
(3, 'Efectivo'),
(4, 'PSE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

DROP TABLE IF EXISTS `pedido`;
CREATE TABLE IF NOT EXISTS `pedido` (
  `id_pedido` int NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `direccion` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `total` decimal(10,3) DEFAULT NULL,
  `cliente_id` int DEFAULT NULL,
  `producto_id` int DEFAULT NULL,
  `envio` tinyint(1) NOT NULL,
  `estado` varchar(30) COLLATE utf8mb3_spanish_ci NOT NULL,
  `metodo_de_pago_id` int DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `cliente_id` (`cliente_id`),
  KEY `producto_id` (`producto_id`),
  KEY `metodo_de_pago_id` (`metodo_de_pago_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`id_pedido`, `fecha`, `direccion`, `total`, `cliente_id`, `producto_id`, `envio`, `estado`, `metodo_de_pago_id`) VALUES
(1, '2025-01-15', 'calle 12 n° 24- 39', 181.000, 1, 1, 0, 'en proceso', 1),
(2, '2025-01-16', 'carrera 13 # 25- 38', 75.000, 2, 2, 0, 'en proceso', 4),
(3, '2025-01-17', 'diagonal 14 # 26- 37', 285.000, 3, 3, 0, 'pendiente', 2),
(4, '2025-01-18', 'avenida 15 # 27- 36', 130.000, 4, 4, 1, 'entregado', 3),
(5, '2025-02-16', 'calle 16 # 28 - 35', 195.000, 5, 5, 1, 'entregado', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `precio` decimal(10,3) DEFAULT NULL,
  `region` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `imagen` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `precio`, `region`, `stock`, `imagen`) VALUES
(1, 'Sombrero vueltiao', 'Es uno de los elementos más representativos de la cultura colombiana, tanto a nivel nacional como internacional. Este sombrero colombiano fue diseñado hace más de doscientos años.', 60.200, 'Region caribe', 18, 'https://colombia.co/sites/default/files/inline-images/sombrero-vueltiao-colombiano.jpeg'),
(2, 'Queso de Paipa', 'Oriundo de esa población boyacense, cuenta con el certificado de origen que respalda la producción artesanal de quesos semi-maduros, con sabor ácido y amargo suave, de aroma rancio y color amarillo pálido.', 25.000, 'Region Andina', 5, 'https://colombia.co/sites/default/files/marca-pais/images/wp-content/uploads/2018/04/El-queso-paipa-es-uno-de-los-productos-colombianos-con-Sello-de-Denominacio%CC%81n-de-Origen-%E2%80%93-Queso-paipa-servido-en-tabla-de-madera-Marca-Pai%CC%81s-Colombia-.png'),
(3, 'Café Colombiano 5 kilos', 'Una taza de café colombiano tiene un perfil típico de sabor suave y versátil de fragancias y sabores, entre otras características que cualquier aficionado al café sabe apreciar. Sus propiedades lo hacen irresistible.', 95.000, 'Region Andina', 23, 'https://colombia.co/sites/default/files/marca-pais/images/wp-content/uploads/2017/06/caf%C3%A9-2r2.png'),
(4, 'Vajilla de pocillos de Raquira', 'Es un conjunto de piezas de cerámica artesanal, originarias de Ráquira, Boyacá, Colombia. Estos pocillos son conocidos por su belleza y calidad, y suelen ser decorados con diseños tradicionales y colores vibrantes.', 65.000, 'Region Andina', 6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1QijNYKrUNSqWgjFs05MJ_xLOSi2urav1A&s'),
(5, 'Mochila Wayúu', 'son una expresión auténtica de la cultura y artesanía de este pueblo indígena colombiano. Son tejidas a mano por mujeres Wayúu utilizando técnicas tradicionales y fibras naturales. Cada mochila es única y refleja la creatividad y habilidad&nbsp;de&nbsp;la&nbsp;artesana.', 195.000, 'Region Caribe', 7, 'https://artesaniascolombianas.co/wordpress/wp-content/uploads/2017/11/mochila_wayuu_135_2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_pedido`
--

DROP TABLE IF EXISTS `producto_pedido`;
CREATE TABLE IF NOT EXISTS `producto_pedido` (
  `id_producto_pedido` int NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `pedido_id` int DEFAULT NULL,
  `producto_id` int DEFAULT NULL,
  PRIMARY KEY (`id_producto_pedido`),
  KEY `pedido_id` (`pedido_id`),
  KEY `producto_id` (`producto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `producto_pedido`
--

INSERT INTO `producto_pedido` (`id_producto_pedido`, `cantidad`, `pedido_id`, `producto_id`) VALUES
(1, 3, 1, 1),
(2, 3, 2, 2),
(3, 3, 1, 1),
(4, 3, 2, 2),
(5, 4, 4, 4),
(6, 3, 3, 3),
(7, 3, 5, 5);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id_cliente`),
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`metodo_de_pago_id`) REFERENCES `metodo_de_pago` (`id_metodo_pago`);

--
-- Filtros para la tabla `producto_pedido`
--
ALTER TABLE `producto_pedido`
  ADD CONSTRAINT `producto_pedido_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id_pedido`),
  ADD CONSTRAINT `producto_pedido_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id_producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
