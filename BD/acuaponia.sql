-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2019 a las 21:34:27
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
-- Base de datos: `acuaponia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_us` int(10) NOT NULL,
  `us_nombre` char(50) NOT NULL,
  `us_apellido` char(50) NOT NULL,
  `us_correo` varchar(50) NOT NULL,
  `us_clave` char(50) NOT NULL,
  `num_ser` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_us`, `us_nombre`, `us_apellido`, `us_correo`, `us_clave`, `num_ser`) VALUES
(16, 'Missael', 'Jimenez', 'missael@ucol.mx', '202cb962ac59075b964b07152d234b70', '12345'),
(21, 'jj', '123', '4j2@ucol.mx', '202cb962ac59075b964b07152d234b70', '1231322132'),
(22, 'missael', 'puto', 'or2@ucol.mx', '202cb962ac59075b964b07152d234b70', '1232112311'),
(23, 'DSA', 'ASD', 'ASD@UCOL.MX', '202cb962ac59075b964b07152d234b70', 'SAD21312');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `variables`
--

CREATE TABLE `variables` (
  `Fechas` date NOT NULL,
  `TemperaturaT` int(11) NOT NULL,
  `TemperaturaA` int(11) NOT NULL,
  `HumedadAgua` int(11) NOT NULL,
  `HumedadAmbiente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `variables`
--

INSERT INTO `variables` (`Fechas`, `TemperaturaT`, `TemperaturaA`, `HumedadAgua`, `HumedadAmbiente`) VALUES
('0000-00-00', 18, 20, 82, 16),
('0000-00-00', 10, 11, 12, 13),
('0000-00-00', 15, 16, 16, 16),
('0000-00-00', 10, 11, 12, 13),
('0000-00-00', 15, 16, 16, 16),
('0000-00-00', 20, 85, 45, 12),
('0000-00-00', 20, 85, 45, 12),
('0000-00-00', 16, 18, 80, 12),
('0000-00-00', 58, 52, 10, 10),
('0000-00-00', 16, 18, 80, 12),
('0000-00-00', 58, 52, 10, 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_us`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_us` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
