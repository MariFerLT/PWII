-- CreateTable
CREATE TABLE `Comentario` (
    `id_comentario` INTEGER NOT NULL AUTO_INCREMENT,
    `comentario` VARCHAR(191) NULL,
    `fecha_comentario` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_user` INTEGER NULL,
    `id_pelicula` INTEGER NULL,

    PRIMARY KEY (`id_comentario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Calificacion` (
    `id_calificacion` INTEGER NOT NULL AUTO_INCREMENT,
    `calificacion` DOUBLE NULL,
    `fecha_calificacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_user` INTEGER NOT NULL,
    `id_pelicula` INTEGER NULL,

    PRIMARY KEY (`id_calificacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Usuario`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_id_pelicula_fkey` FOREIGN KEY (`id_pelicula`) REFERENCES `Pelicula`(`id_pelicula`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Calificacion` ADD CONSTRAINT `Calificacion_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Usuario`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Calificacion` ADD CONSTRAINT `Calificacion_id_pelicula_fkey` FOREIGN KEY (`id_pelicula`) REFERENCES `Pelicula`(`id_pelicula`) ON DELETE CASCADE ON UPDATE CASCADE;
