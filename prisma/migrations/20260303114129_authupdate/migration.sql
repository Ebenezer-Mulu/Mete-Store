-- AlterTable
ALTER TABLE "User" ADD COLUMN     "resetToken" TEXT,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'USER',
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;
