-- CreateTable
CREATE TABLE `Jabatan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_jabatan` VARCHAR(191) NOT NULL,
    `tunjangan_jabatan` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lembur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_karyawan` INTEGER NOT NULL,
    `bulan` VARCHAR(191) NULL,
    `tahun` VARCHAR(191) NULL,
    `hari` INTEGER NOT NULL,
    `jumlah_jam` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Karyawan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_jabatan` INTEGER NOT NULL,
    `nama_karyawan` VARCHAR(191) NOT NULL,
    `jenis_kelamin` VARCHAR(191) NOT NULL,
    `tgl_lahir` DATETIME(3) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `agama` VARCHAR(191) NOT NULL,
    `no_telp` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `gaji_pokok` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Potongan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_karyawan` INTEGER NOT NULL,
    `bulan` VARCHAR(191) NOT NULL,
    `tahun` VARCHAR(191) NOT NULL,
    `nominal` INTEGER NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Absensi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_karyawan` INTEGER NOT NULL,
    `tgl` DATETIME(3) NULL,
    `bulan` VARCHAR(191) NULL,
    `tahun` VARCHAR(191) NULL,
    `masuk` DATETIME(3) NULL,
    `alfa` VARCHAR(191) NULL,
    `sakit` VARCHAR(191) NULL,
    `cuti` VARCHAR(191) NULL,
    `shif` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gaji` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_karyawan` INTEGER NOT NULL,
    `id_jabatan` INTEGER NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `bulan` VARCHAR(191) NOT NULL,
    `tahun` VARCHAR(191) NOT NULL,
    `gaji` INTEGER NOT NULL,
    `gaji_kotor` INTEGER NOT NULL,
    `gaji_bersih` INTEGER NOT NULL,
    `uang_lembur` INTEGER NOT NULL,
    `uang_shift` INTEGER NOT NULL,
    `bonus` INTEGER NOT NULL,
    `tunjangan` INTEGER NOT NULL,
    `tunjangan_ramadhan` INTEGER NOT NULL,
    `potongan_bpjs` INTEGER NOT NULL,
    `potongan_pph21` INTEGER NOT NULL,
    `potongan_no_working` INTEGER NOT NULL,
    `potongan_lain` INTEGER NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lembur` ADD CONSTRAINT `Lembur_id_karyawan_fkey` FOREIGN KEY (`id_karyawan`) REFERENCES `Karyawan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Karyawan` ADD CONSTRAINT `Karyawan_id_jabatan_fkey` FOREIGN KEY (`id_jabatan`) REFERENCES `Jabatan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Potongan` ADD CONSTRAINT `Potongan_id_karyawan_fkey` FOREIGN KEY (`id_karyawan`) REFERENCES `Karyawan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absensi` ADD CONSTRAINT `Absensi_id_karyawan_fkey` FOREIGN KEY (`id_karyawan`) REFERENCES `Karyawan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gaji` ADD CONSTRAINT `Gaji_id_karyawan_fkey` FOREIGN KEY (`id_karyawan`) REFERENCES `Karyawan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gaji` ADD CONSTRAINT `Gaji_id_jabatan_fkey` FOREIGN KEY (`id_jabatan`) REFERENCES `Jabatan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
