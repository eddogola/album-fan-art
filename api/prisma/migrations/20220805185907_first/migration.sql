-- CreateTable
CREATE TABLE "ArtWork" (
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "userArtId" INTEGER,

    CONSTRAINT "ArtWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserArt" (
    "id" SERIAL NOT NULL,
    "userNickname" TEXT NOT NULL,

    CONSTRAINT "UserArt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserArt_userNickname_key" ON "UserArt"("userNickname");

-- AddForeignKey
ALTER TABLE "ArtWork" ADD CONSTRAINT "ArtWork_userArtId_fkey" FOREIGN KEY ("userArtId") REFERENCES "UserArt"("id") ON DELETE SET NULL ON UPDATE CASCADE;
