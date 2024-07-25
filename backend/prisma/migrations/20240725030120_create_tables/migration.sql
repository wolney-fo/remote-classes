-- CreateTable
CREATE TABLE "subjects" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "thumbnail_url" TEXT NOT NULL,

    CONSTRAINT "subjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "weekday" INTEGER NOT NULL,
    "starts_at_hour" INTEGER NOT NULL,
    "starts_at_minute" INTEGER NOT NULL,
    "ends_at_hour" INTEGER NOT NULL,
    "ends_at_minute" INTEGER NOT NULL,
    "subjectId" INTEGER,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
