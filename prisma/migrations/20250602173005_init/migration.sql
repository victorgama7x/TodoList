-- CreateTable
CREATE TABLE "TodoList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "maded" BOOLEAN NOT NULL DEFAULT false,
    "priority" INTEGER NOT NULL
);
