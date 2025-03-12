-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema buenaVidaDb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema buenaVidaDb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `buenaVidaDb` DEFAULT CHARACTER SET utf8 ;
USE `buenaVidaDb` ;

-- -----------------------------------------------------
-- Table `buenaVidaDb`.`Category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenaVidaDb`.`Category` (
  `idCategory` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idCategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `buenaVidaDb`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenaVidaDb`.`Product` (
  `idProduct` VARCHAR(45) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `state` TINYINT NOT NULL COMMENT 'Active or Inactive product',
  `stock` INT NOT NULL COMMENT 'Product available quantity',
  `Category_idCategory` INT NOT NULL,
  `image` VARCHAR(45) NULL COMMENT 'Image name',
  PRIMARY KEY (`idProduct`),
  INDEX `fk_Product_Category_idx` (`Category_idCategory` ASC) VISIBLE,
  CONSTRAINT `fk_Product_Category`
    FOREIGN KEY (`Category_idCategory`)
    REFERENCES `buenaVidaDb`.`Category` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `buenaVidaDb`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenaVidaDb`.`role` (
  `idrole` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idrole`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `buenaVidaDb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenaVidaDb`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surnames` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role_idrole` INT NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_User_role1_idx` (`role_idrole` ASC) VISIBLE,
  CONSTRAINT `fk_User_role1`
    FOREIGN KEY (`role_idrole`)
    REFERENCES `buenaVidaDb`.`role` (`idrole`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `buenaVidaDb`.`Cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenaVidaDb`.`Cart` (
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`User_idUser`),
  INDEX `fk_Cart_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_Cart_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `buenaVidaDb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `buenaVidaDb`.`Favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenaVidaDb`.`Favorites` (
  `User_idUser` INT NOT NULL,
  `Product_idProduct` VARCHAR(45) NULL,
  INDEX `fk_Favorite_Product1_idx` (`Product_idProduct` ASC) VISIBLE,
  UNIQUE INDEX `Product_idProduct_UNIQUE` (`Product_idProduct` ASC) VISIBLE,
  CONSTRAINT `fk_Favorite_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `buenaVidaDb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Favorite_Product1`
    FOREIGN KEY (`Product_idProduct`)
    REFERENCES `buenaVidaDb`.`Product` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `buenaVidaDb`.`CartItem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenaVidaDb`.`CartItem` (
  `Product_idProduct` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL COMMENT 'Product quantity added to the cart',
  `Cart_User_idUser` INT NOT NULL,
  PRIMARY KEY (`Product_idProduct`),
  INDEX `fk_CartItem_Cart1_idx` (`Cart_User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_CartItem_Product1`
    FOREIGN KEY (`Product_idProduct`)
    REFERENCES `buenaVidaDb`.`Product` (`idProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CartItem_Cart1`
    FOREIGN KEY (`Cart_User_idUser`)
    REFERENCES `buenaVidaDb`.`Cart` (`User_idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `buenaVidaDb`.`Bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenaVidaDb`.`Bill` (
  `User_idUser` INT NOT NULL,
  `total` DECIMAL(10,2) NOT NULL,
  `idBill` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  INDEX `fk_Bill_User1_idx` (`User_idUser` ASC) VISIBLE,
  PRIMARY KEY (`idBill`),
  CONSTRAINT `fk_Bill_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `buenaVidaDb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
