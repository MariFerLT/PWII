-- CreateTable
CREATE TABLE `Usuario` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_usuario` VARCHAR(191) NULL,
    `fecha_registro` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `correo` VARCHAR(191) NULL,
    `clave` VARCHAR(191) NULL,
    `rol` INTEGER NULL,
    `fecha_nacimiento` DATETIME(3) NULL,

    UNIQUE INDEX `Usuario_nombre_usuario_key`(`nombre_usuario`),
    UNIQUE INDEX `Usuario_correo_key`(`correo`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
