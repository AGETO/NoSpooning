-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Loomise aeg: Mai 13, 2016 kell 05:34 PM
-- Serveri versioon: 5.5.47-0ubuntu0.14.04.1
-- PHP versioon: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Andmebaas: `c9`
--

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `device`
--

CREATE TABLE IF NOT EXISTS `device` (
  `device_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `device_name` varchar(255) NOT NULL,
  `serial_code` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `Warnings` varchar(255) NOT NULL,
  `Maintenance` varchar(255) NOT NULL,
  PRIMARY KEY (`device_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Andmete tõmmistamine tabelile `device`
--

INSERT INTO `device` (`device_id`, `user_id`, `device_name`, `serial_code`, `status`, `Warnings`, `Maintenance`) VALUES
(1, 1, 'Duramax LTE Measuring Equipment', '34UNCI11', 'Operational', 'Temperature too hot', ''),
(2, 1, 'HANDYSURF Portable roughness measurement tool', 'FXRLS35S', 'Idle', 'Temperature too cold', ''),
(3, 1, 'O-INSPECT 322 Measuring range [dm] 3/2/2', 'DJSJCUO2', 'Operational', 'Firmware not updated', ''),
(4, 1, 'SURFCOM FLEX Mobile control and analysis unit', 'SM6SJ2EO', 'Idle', 'Available update(s)', 'Is in space');

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `e_mail` varchar(255) NOT NULL,
  PRIMARY KEY (`user_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Andmete tõmmistamine tabelile `user`
--

INSERT INTO `user` (`user_ID`, `name`, `username`, `password`, `e_mail`) VALUES
(1, 'Admin Istrator', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@gmail.com'),
(2, 'User One', 'user', 'ee11cbb19052e40b07aac0ca060c23ee', 'user@gmail.com');

--
-- Tõmmistatud tabelite piirangud
--

--
-- Piirangud tabelile `device`
--
ALTER TABLE `device`
  ADD CONSTRAINT `device_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
