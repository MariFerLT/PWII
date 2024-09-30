-- CreateTable
CREATE TABLE `Pelicula` (
    `id_pelicula` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `calificacion` DOUBLE NOT NULL,
    `miniatura` VARCHAR(191) NOT NULL,
    `id_categoria` INTEGER NULL,

    PRIMARY KEY (`id_pelicula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pelicula` ADD CONSTRAINT `Pelicula_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Usuario`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pelicula` ADD CONSTRAINT `Pelicula_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `Categoria`(`id_categoria`) ON DELETE SET NULL ON UPDATE CASCADE;
