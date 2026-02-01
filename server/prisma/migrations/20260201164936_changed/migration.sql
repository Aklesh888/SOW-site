/*
  Warnings:

  - You are about to drop the column `unitsSold` on the `Product` table. All the data in the column will be lost.
  - Added the required column `unit` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "unitsSold",
ADD COLUMN     "unit" TEXT NOT NULL;
