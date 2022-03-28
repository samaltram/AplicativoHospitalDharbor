/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50737
 Source Host           : localhost:3306
 Source Schema         : hospital

 Target Server Type    : MySQL
 Target Server Version : 50737
 File Encoding         : 65001

 Date: 27/03/2022 23:02:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for doctor_especialidad
-- ----------------------------
DROP TABLE IF EXISTS `doctor_especialidad`;
CREATE TABLE `doctor_especialidad`  (
  `id_doctor_especialidad` int(11) NOT NULL AUTO_INCREMENT,
  `id_doctor` int(11) NULL DEFAULT NULL,
  `id_especialidad` int(11) NULL DEFAULT NULL,
  `creado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fecha_creacion` datetime(6) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(6) NULL DEFAULT NULL,
  `modificado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_doctor_especialidad`) USING BTREE,
  INDEX `FKfqhvvrgt7ta9amscd4dq0ooqa`(`id_doctor`) USING BTREE,
  INDEX `FKs5ev89y49nwuo5j2m59cor9ui`(`id_especialidad`) USING BTREE,
  CONSTRAINT `FKfqhvvrgt7ta9amscd4dq0ooqa` FOREIGN KEY (`id_doctor`) REFERENCES `doctores` (`id_doctor`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKs5ev89y49nwuo5j2m59cor9ui` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidad` (`id_especialidad`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor_especialidad
-- ----------------------------
INSERT INTO `doctor_especialidad` VALUES (1, 1, 4, 'sas', '2022-03-26 21:33:34.000000', '2022-03-26 21:33:46.000000', 'sas');
INSERT INTO `doctor_especialidad` VALUES (5, 1, 6, 'UsrPrueba', '2022-03-27 17:43:15.952000', '2022-03-27 17:43:15.952000', 'UsrPrueba');

-- ----------------------------
-- Table structure for doctores
-- ----------------------------
DROP TABLE IF EXISTS `doctores`;
CREATE TABLE `doctores`  (
  `id_doctor` int(11) NOT NULL AUTO_INCREMENT,
  `apellidos` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `direccion` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fecha_nacimiento` date NULL DEFAULT NULL,
  `foto` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nombres` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `creado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fecha_creacion` datetime(6) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(6) NULL DEFAULT NULL,
  `modificado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_doctor`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctores
-- ----------------------------
INSERT INTO `doctores` VALUES (1, 'Altamirano Ramos', 'Av Mario Mercado', '2022-03-25', 'Actual', 'Samuel Antonio', 'UsrPrueba', '2022-03-26 10:49:47.645000', '2022-03-26 10:49:47.645000', 'UsrPrueba');
INSERT INTO `doctores` VALUES (2, 'Perez Almaraz', 'MAs allia', '2022-03-11', 'nUeva', 'Juansito Fernando', 'UsrPrueba', '2022-03-27 11:49:33.937000', '2022-03-27 11:49:33.937000', 'UsrPrueba');

-- ----------------------------
-- Table structure for especialidad
-- ----------------------------
DROP TABLE IF EXISTS `especialidad`;
CREATE TABLE `especialidad`  (
  `id_especialidad` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `descripcion` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `icono` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `creado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fecha_creacion` datetime(6) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(6) NULL DEFAULT NULL,
  `modificado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_especialidad`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of especialidad
-- ----------------------------
INSERT INTO `especialidad` VALUES (4, 'oncologia', 'tratamiento de cancer 445554', 'cancer', 'UsrPrueba', '2022-03-23 22:55:12.183000', '2022-03-23 22:57:26.847000', 'UsrPrueba');
INSERT INTO `especialidad` VALUES (5, 'oncologia', 'tratamiento de cancer', 'cancer', 'UsrPrueba', '2022-03-23 21:46:13.844000', '2022-03-23 21:46:13.844000', 'UsrPrueba');
INSERT INTO `especialidad` VALUES (6, 'Odontología', 'Cuidado de los Dientes', 'ondontologia', 'UsrPrueba', '2022-03-26 07:03:47.377000', '2022-03-26 07:03:47.377000', 'UsrPrueba');
INSERT INTO `especialidad` VALUES (7, 'Pediatría', 'Tratamiento de Niños', 'Pediatria', 'UsrPrueba', '2022-03-26 10:00:17.983000', '2022-03-26 10:00:17.983000', 'UsrPrueba');

-- ----------------------------
-- Table structure for historial_paciente
-- ----------------------------
DROP TABLE IF EXISTS `historial_paciente`;
CREATE TABLE `historial_paciente`  (
  `id_historial_paciente` int(11) NOT NULL AUTO_INCREMENT,
  `id_doctor` int(11) NULL DEFAULT NULL,
  `id_paciente` int(11) NULL DEFAULT NULL,
  `creado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fecha_creacion` datetime(6) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(6) NULL DEFAULT NULL,
  `modificado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `descripcion` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fecha` datetime(6) NOT NULL,
  PRIMARY KEY (`id_historial_paciente`) USING BTREE,
  INDEX `FK7qqbm7dduku7lnrmqg20cibkt`(`id_doctor`) USING BTREE,
  INDEX `FKt9l3wtacov1mwa5y7ndekf0dp`(`id_paciente`) USING BTREE,
  CONSTRAINT `FK7qqbm7dduku7lnrmqg20cibkt` FOREIGN KEY (`id_doctor`) REFERENCES `doctores` (`id_doctor`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKt9l3wtacov1mwa5y7ndekf0dp` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of historial_paciente
-- ----------------------------
INSERT INTO `historial_paciente` VALUES (1, 1, 1, 'sas', '2022-03-27 20:18:33.000000', '2022-03-27 20:18:43.000000', 'sas', 'esta en la primera visita ', '2022-03-10 20:53:41.000000');
INSERT INTO `historial_paciente` VALUES (2, 1, 2, 'sas', '2022-03-24 20:19:25.000000', '2022-02-11 20:19:31.000000', 'sas', 'esta es una vistifa de cortesisa', '2022-03-03 20:53:49.000000');
INSERT INTO `historial_paciente` VALUES (3, 2, 1, 'sas', '2022-03-27 20:20:14.000000', '2022-03-27 21:47:12.734000', 'UsrPrueba', 'esta es una prueba', '2022-03-17 20:00:00.000000');
INSERT INTO `historial_paciente` VALUES (4, 2, 2, 'sas', '2022-03-16 20:21:05.000000', '2022-03-09 20:21:09.000000', 'sas', ' sadoiasbdasl jdasljd asdj sadjlsadjlsajdsadasdsa dajsld sadjlas djsa', '2022-03-14 20:53:59.000000');
INSERT INTO `historial_paciente` VALUES (5, 1, 1, 'UsrPrueba', '2022-03-27 21:33:02.062000', '2022-03-27 21:33:02.062000', 'UsrPrueba', 'Este grabado esta siendo controlado por SAR', '2022-03-03 20:00:00.000000');
INSERT INTO `historial_paciente` VALUES (6, 2, 1, 'UsrPrueba', '2022-03-27 21:47:37.795000', '2022-03-27 21:47:37.795000', 'UsrPrueba', 'Este grabado esta siendo controlado por SAR', '2022-03-05 20:00:00.000000');
INSERT INTO `historial_paciente` VALUES (7, 2, 2, 'UsrPrueba', '2022-03-27 21:55:37.619000', '2022-03-27 21:55:37.619000', 'UsrPrueba', 'Este grabado esta siendo controlado por SAR fhfehfdhdfhfsdhdf', '2022-03-09 20:00:00.000000');

-- ----------------------------
-- Table structure for hospital_doctor
-- ----------------------------
DROP TABLE IF EXISTS `hospital_doctor`;
CREATE TABLE `hospital_doctor`  (
  `id_hospital_doctor` int(11) NOT NULL AUTO_INCREMENT,
  `id_doctor` int(11) NULL DEFAULT NULL,
  `id_hospital` int(11) NULL DEFAULT NULL,
  `creado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fecha_creacion` datetime(6) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(6) NULL DEFAULT NULL,
  `modificado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_hospital_doctor`) USING BTREE,
  INDEX `FK4eu8y2ht7qinva3pdppfe1dqg`(`id_doctor`) USING BTREE,
  INDEX `FK8dgrehlxdbomnq3v7n0idw1b2`(`id_hospital`) USING BTREE,
  CONSTRAINT `FK4eu8y2ht7qinva3pdppfe1dqg` FOREIGN KEY (`id_doctor`) REFERENCES `doctores` (`id_doctor`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK8dgrehlxdbomnq3v7n0idw1b2` FOREIGN KEY (`id_hospital`) REFERENCES `hospitales` (`id_hospital`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hospital_doctor
-- ----------------------------
INSERT INTO `hospital_doctor` VALUES (1, 1, 15, 'sas', '2022-03-26 16:35:31.000000', '2022-03-26 16:35:37.000000', 'sas');
INSERT INTO `hospital_doctor` VALUES (2, 1, 8, 'UsrPrueba', '2022-03-27 19:06:01.151000', '2022-03-27 19:06:01.151000', 'UsrPrueba');
INSERT INTO `hospital_doctor` VALUES (3, 2, 8, 'UsrPrueba', '2022-03-27 19:06:14.240000', '2022-03-27 19:06:14.240000', 'UsrPrueba');
INSERT INTO `hospital_doctor` VALUES (4, 2, 10, 'UsrPrueba', '2022-03-27 19:17:17.979000', '2022-03-27 19:17:17.979000', 'UsrPrueba');

-- ----------------------------
-- Table structure for hospitales
-- ----------------------------
DROP TABLE IF EXISTS `hospitales`;
CREATE TABLE `hospitales`  (
  `id_hospital` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `creado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fecha_creacion` datetime(6) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(6) NULL DEFAULT NULL,
  `modificado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_hospital`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hospitales
-- ----------------------------
INSERT INTO `hospitales` VALUES (8, 'Clinica del MAR 1', 'UsrPrueba', '2022-03-25 13:53:11.651000', '2022-03-25 20:46:33.150000', 'UsrPrueba');
INSERT INTO `hospitales` VALUES (9, 'Nuevo', 'UsrPrueba', '2022-03-25 20:20:28.277000', '2022-03-25 20:21:04.046000', 'UsrPrueba');
INSERT INTO `hospitales` VALUES (10, 'Las Lomas del SuR', 'UsrPrueba', '2022-03-25 20:21:22.895000', '2022-03-25 20:21:22.895000', 'UsrPrueba');
INSERT INTO `hospitales` VALUES (11, 'Jaimaca', 'UsrPrueba', '2022-03-25 20:22:13.884000', '2022-03-25 20:22:13.884000', 'UsrPrueba');
INSERT INTO `hospitales` VALUES (12, 'LuZenburgo', 'UsrPrueba', '2022-03-25 20:22:24.949000', '2022-03-25 20:22:24.949000', 'UsrPrueba');
INSERT INTO `hospitales` VALUES (13, 'Camargo', 'UsrPrueba', '2022-03-25 20:22:45.374000', '2022-03-25 20:22:45.374000', 'UsrPrueba');
INSERT INTO `hospitales` VALUES (15, 'Jan XXIII', 'UsrPrueba', '2022-03-25 20:23:26.470000', '2022-03-25 20:23:26.470000', 'UsrPrueba');
INSERT INTO `hospitales` VALUES (16, 'Guadalupa', 'UsrPrueba', '2022-03-25 20:23:51.725000', '2022-03-25 20:23:51.725000', 'UsrPrueba');
INSERT INTO `hospitales` VALUES (17, 'San Javier', 'UsrPrueba', '2022-03-25 20:24:00.350000', '2022-03-25 20:24:00.350000', 'UsrPrueba');
INSERT INTO `hospitales` VALUES (18, 'Nueva Imagen', 'UsrPrueba', '2022-03-25 20:24:25.275000', '2022-03-25 20:24:25.275000', 'UsrPrueba');
INSERT INTO `hospitales` VALUES (19, 'Nueva LUNA', 'UsrPrueba', '2022-03-25 20:50:45.503000', '2022-03-25 20:50:45.503000', 'UsrPrueba');

-- ----------------------------
-- Table structure for pacientes
-- ----------------------------
DROP TABLE IF EXISTS `pacientes`;
CREATE TABLE `pacientes`  (
  `id_paciente` int(11) NOT NULL AUTO_INCREMENT,
  `apellidos` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `direccion` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `fecha_nacimiento` date NULL DEFAULT NULL,
  `foto` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nombres` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `creado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `fecha_creacion` datetime(6) NULL DEFAULT NULL,
  `fecha_modificacion` datetime(6) NULL DEFAULT NULL,
  `modificado_por` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_paciente`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pacientes
-- ----------------------------
INSERT INTO `pacientes` VALUES (1, 'Perez de la Riva', 'Chullumani 192', '1979-01-17', 'foto2', 'Juan Carlos', 'UsrPrueba', '2022-03-26 11:06:02.327000', '2022-03-26 11:06:02.327000', 'UsrPrueba');
INSERT INTO `pacientes` VALUES (2, 'Perez Almaraz', 'MAs allia de po ahi', '2021-04-06', 'nueva foto', 'Juansito Fernando', 'UsrPrueba', '2022-03-27 20:03:36.820000', '2022-03-27 20:03:36.820000', 'UsrPrueba');

SET FOREIGN_KEY_CHECKS = 1;
