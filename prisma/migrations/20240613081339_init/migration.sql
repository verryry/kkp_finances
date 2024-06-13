-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jabatan" (
    "id" SERIAL NOT NULL,
    "nama_jabatan" TEXT NOT NULL,
    "tunjangan_jabatan" INTEGER NOT NULL,
    "division" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jabatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lembur" (
    "id" SERIAL NOT NULL,
    "id_karyawan" INTEGER NOT NULL,
    "bulan" TEXT,
    "tahun" TEXT,
    "hari" INTEGER NOT NULL,
    "jumlah_jam" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lembur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Karyawan" (
    "id" SERIAL NOT NULL,
    "id_jabatan" INTEGER NOT NULL,
    "nama_karyawan" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "tgl_lahir" TIMESTAMP(3) NOT NULL,
    "alamat" TEXT NOT NULL,
    "agama" TEXT NOT NULL,
    "no_telp" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "gaji_pokok" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Karyawan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Potongan" (
    "id" SERIAL NOT NULL,
    "id_karyawan" INTEGER NOT NULL,
    "bulan" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "nominal" INTEGER NOT NULL,
    "keterangan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Potongan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Absensi" (
    "id" SERIAL NOT NULL,
    "id_karyawan" INTEGER NOT NULL,
    "tgl" TIMESTAMP(3),
    "bulan" TEXT,
    "tahun" TEXT,
    "masuk" TIMESTAMP(3),
    "alfa" TEXT,
    "sakit" TEXT,
    "cuti" TEXT,
    "shif" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Absensi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gaji" (
    "id" SERIAL NOT NULL,
    "id_karyawan" INTEGER NOT NULL,
    "id_jabatan" INTEGER NOT NULL,
    "department" TEXT NOT NULL,
    "bulan" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "gaji" INTEGER NOT NULL,
    "gaji_kotor" INTEGER NOT NULL,
    "gaji_bersih" INTEGER NOT NULL,
    "uang_lembur" INTEGER NOT NULL,
    "uang_shift" INTEGER NOT NULL,
    "bonus" INTEGER NOT NULL,
    "tunjangan" INTEGER NOT NULL,
    "tunjangan_ramadhan" INTEGER NOT NULL,
    "potongan_bpjs" INTEGER NOT NULL,
    "potongan_pph21" INTEGER NOT NULL,
    "potongan_no_working" INTEGER NOT NULL,
    "potongan_lain" INTEGER NOT NULL,
    "keterangan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gaji_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Lembur" ADD CONSTRAINT "Lembur_id_karyawan_fkey" FOREIGN KEY ("id_karyawan") REFERENCES "Karyawan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Karyawan" ADD CONSTRAINT "Karyawan_id_jabatan_fkey" FOREIGN KEY ("id_jabatan") REFERENCES "Jabatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Potongan" ADD CONSTRAINT "Potongan_id_karyawan_fkey" FOREIGN KEY ("id_karyawan") REFERENCES "Karyawan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_id_karyawan_fkey" FOREIGN KEY ("id_karyawan") REFERENCES "Karyawan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gaji" ADD CONSTRAINT "Gaji_id_karyawan_fkey" FOREIGN KEY ("id_karyawan") REFERENCES "Karyawan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gaji" ADD CONSTRAINT "Gaji_id_jabatan_fkey" FOREIGN KEY ("id_jabatan") REFERENCES "Jabatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
