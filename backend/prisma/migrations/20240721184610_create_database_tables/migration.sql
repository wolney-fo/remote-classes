-- CreateTable
CREATE TABLE `subjects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `thumbnail_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `classes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `weekday` INTEGER NOT NULL,
    `starts_at_hour` INTEGER NOT NULL,
    `starts_at_minute` INTEGER NOT NULL,
    `ends_at_hour` INTEGER NOT NULL,
    `ends_at_minute` INTEGER NOT NULL,
    `subjectId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `classes` ADD CONSTRAINT `classes_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `subjects`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
