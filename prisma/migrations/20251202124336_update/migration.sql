/*
  Warnings:

  - Made the column `description` on table `Restaurant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "phone" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "description" SET NOT NULL;
