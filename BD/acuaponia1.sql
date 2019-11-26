-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2019 at 07:46 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `acuaponia`
--

-- --------------------------------------------------------

--
-- Table structure for table `dispositivos`
--

CREATE TABLE `dispositivos` (
  `dis_NoSerie` int(15) NOT NULL,
  `Id_usuario` int(30) NOT NULL,
  `Id_lecturas` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla de dispositivos para el sistema de acuaponia';

--
-- Dumping data for table `dispositivos`
--

INSERT INTO `dispositivos` (`dis_NoSerie`, `Id_usuario`, `Id_lecturas`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `lectura`
--

CREATE TABLE `lectura` (
  `id` int(15) NOT NULL,
  `Id_lectura` int(50) NOT NULL,
  `lec_FechaHora` text NOT NULL,
  `lec_TemR` double NOT NULL,
  `lec_HumR` double NOT NULL,
  `lec_HumT` double NOT NULL,
  `lec_TemA` double NOT NULL,
  `dis_NoSerie` int(15) NOT NULL,
  `Id_usuario` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lectura`
--

INSERT INTO `lectura` (`id`, `Id_lectura`, `lec_FechaHora`, `lec_TemR`, `lec_HumR`, `lec_HumT`, `lec_TemA`, `dis_NoSerie`, `Id_usuario`) VALUES
(199, 1, '21/11/2019 01:23:08 p. m.', 1, 2, 0, 4, 1, 1),
(200, 1, '21/11/2019 01:23:09 p. m.', 1, 2, 3, 4, 1, 1),
(201, 1, '21/11/2019 01:24:00 p. m.', 1, 2, 0, 3, 1, 1),
(202, 1, '21/11/2019 01:24:01 p. m.', 1, 2, 3, 4, 1, 1),
(203, 1, '21/11/2019 01:27:02 p. m.', 1, 0, 2, 3, 1, 1),
(204, 1, '21/11/2019 01:27:02 p. m.', 1, 2, 3, 4, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `Id_usuario` int(30) NOT NULL,
  `us_nombre` text NOT NULL,
  `us_apellido` text NOT NULL,
  `us_correo` text NOT NULL,
  `us_telefono` bigint(10) NOT NULL,
  `us_clave` text NOT NULL,
  `dis_NoSerie` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla de usuarios para el sistema de acuaponia';

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`Id_usuario`, `us_nombre`, `us_apellido`, `us_correo`, `us_telefono`, `us_clave`, `dis_NoSerie`) VALUES
(1, 'Liz', 'Zamora', 'liz@live.com', 3123008571, '123', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dispositivos`
--
ALTER TABLE `dispositivos`
  ADD PRIMARY KEY (`dis_NoSerie`),
  ADD KEY `Id_lecturas` (`Id_lecturas`),
  ADD KEY `Id_usuario` (`Id_usuario`);

--
-- Indexes for table `lectura`
--
ALTER TABLE `lectura`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id_usuario`),
  ADD KEY `dis_NoSerie` (`dis_NoSerie`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lectura`
--
ALTER TABLE `lectura`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=205;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
