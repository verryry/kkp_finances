/*
  Warnings:

  - You are about to alter the column `no_telp` on the `karyawan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `karyawan` MODIFY `no_telp` INTEGER NOT NULL;
