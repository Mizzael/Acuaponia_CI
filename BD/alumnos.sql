-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2019 a las 06:25:38
-- Versión del servidor: 10.1.40-MariaDB
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alumnos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `No_cuenta` int(8) NOT NULL,
  `Nombre` text NOT NULL,
  `Grado` int(1) NOT NULL,
  `Grupo` text NOT NULL,
  `Curp` varchar(18) NOT NULL,
  `Area` text NOT NULL,
  `N_lista` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`No_cuenta`, `Nombre`, `Grado`, `Grupo`, `Curp`, `Area`, `N_lista`) VALUES
(20176827, 'Jimenez Gutierrez Brissa Josselin', 5, 'A', 'JIGB020819MCMMTRA0', 'Analista programador', 16),
(20176827, 'Jimenez Gutierrez Brissa Josselin', 5, 'A', 'JIGB020819MCMMTRA0', 'Analista programador', 16),
(20174589, 'Cortés Lagunes	Ruth Silvana', 5, 'A', 'BADD110313HCMLNS09', 'Analista Programador', 13),
(20171245, 'Zamora Peinado Rosa Luz ', 5, 'A', 'GURA770826HCXTDN43', 'Analista Programador', 10),
(20174578, 'Vega Hernández Daniela Ivette ', 5, 'B', 'SOGA770826MSPTRN39', 'Analista Programador', 9),
(20173265, 'Torres Rojas Daniel ', 5, 'B', 'VAER770826HCCLSS72', 'Analista Programador', 7),
(20176127, 'Rosiles Loeza Pablo Yamild', 5, 'B', 'DESM770826HSLLTR96', 'Analista Programador', 3),
(20176598, 'Rodríguez Jiménez	Abigali', 5, 'C', 'EICM770826MMCSRR29', 'Analista Programador', 6),
(20179764, 'Reyes Saldaña Esteban ', 5, 'C', 'HERF770826HDFRDR38', 'Analista Programador', 12),
(20176431, 'Pérez Moreno Alejandra Berenice', 5, 'C', 'VAVJ770826MCCRGL63', 'Analista Programador', 18),
(20171425, 'Parga Fuentes Irma Carolina ', 5, 'D', 'PEPA770826MASNNN67', 'Analista Programador', 1),
(20172536, 'Ortega Romero Adriana Azzeneth ', 5, 'D', 'CASJ770826MVZSLL11', 'Analista Programador', 12),
(20174758, 'Nuñez Garcia Itzel', 5, 'D', 'JIGB020819MCMMTRA0', 'Analista Programador', 17),
(20175869, 'Moreno Reveles Jessica Liliana', 5, 'E', 'HIRA770826MCHRMN18', 'Bachillerato General', 2),
(20171256, 'Moreno Chávez Yaír Jofrá', 5, 'E', 'REGG770826HHGYTS39', 'Bachillerato General', 19),
(20177852, 'Morales Gonzalez Diana Laura', 5, 'E', 'CUSR770826MHGRTF35', 'Bachillerato General', 16),
(20174563, 'Lunar Pérez Julia Andrea', 5, 'F', 'VAFM770826MCHSRR78', 'Bachillerato General', 21),
(20179874, 'Herrera Arias Luis Fernando', 5, 'F', 'GAHS770826MOCRRL16', 'Bachillerato General', 33),
(20172015, '	Hernández Prado	Miguel Ángel', 5, 'F', 'LOFA770826HCLPLL93', 'Bachillerato General', 41),
(20173068, 'Hernández Palacios Jaime Daniel', 5, 'G', 'GAEA770826MCMRSR78', 'Bachillerato General', 20),
(20170425, 'Hernández González Danna Verónica', 5, 'G', 'JIGB020819MCMMTRA0', 'Bachillerato General', 26),
(20171025, 'Guerrero Padrés Miguel Alejandro', 5, 'G', 'PEMS770826HMNRNR98', 'Bachillerato General', 32),
(20176592, 'Gómez Vargas José Ignacio', 5, 'H', 'GUVM770826MTSZSR17', 'Bachillerato General', 24),
(201763457, '	Flores Silva Karla Paulette', 5, 'H', 'GOCJ770826HASNHR78', 'Bachillerato General', 29),
(20171549, 'Aguayo González Jaime Francisco', 5, 'H', 'RISR770826MCHSNB27', 'Bachillerato General', 30);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
