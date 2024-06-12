/*
  Warnings:

  - Added the required column `division` to the `Jabatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jabatan` ADD COLUMN `division` VARCHAR(191) NOT NULL,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT false;
