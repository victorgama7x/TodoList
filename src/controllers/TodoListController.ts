import { Request, Response } from "express";
import prisma from "../models/TodoList";

export const createTask = async (req: Request, res: Response) => {
  const { name, description, priority } = req.body;

  try {
    const task = await prisma.todoList.create({
      data: {
        name,
        description,
        priority,
      },
    });
    const tasks = await prisma.todoList.findMany({
      orderBy: [{ maded: "asc" }, { priority: "desc" }, { name: "asc" }],
    });
    if (!task) {
      return res.status(500).json({ message: "Falha ao criar tarefa" });
    }
    return res
      .status(201)
      .json({ message: "Tarefa criada com sucesso", tasks });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const listTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.todoList.findMany({
      orderBy: [{ maded: "asc" }, { priority: "desc" }, { name: "asc" }],
    });
    return res.status(200).json({ message: tasks });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const concludeTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const existing = await prisma.todoList.findUnique({
      where: { id: Number(id) },
    });

    if (!existing) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    const update = await prisma.todoList.update({
      where: { id: Number(id) },
      data: { maded: true },
    });

    const tasks = await prisma.todoList.findMany({
      orderBy: [{ maded: "asc" }, { priority: "desc" }, { name: "asc" }],
    });

    return res
      .status(200)
      .json({ message: "Tarefa concluida com sucesso", tasks });
  } catch (error) {
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, priority } = req.body;

  try {
    const existing = await prisma.todoList.findUnique({
      where: { id: Number(id) },
    });

    if (!existing) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    const task = await prisma.todoList.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
        priority,
      },
    });

    const tasks = await prisma.todoList.findMany({
      orderBy: [{ maded: "asc" }, { priority: "desc" }, { name: "asc" }],
    });

    return res
      .status(200)
      .json({ message: "tarefa atualizada com sucesso", task });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar tarefa" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const existing = await prisma.todoList.findUnique({
      where: { id: Number(id) },
    });

    if (!existing) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    const deleted = await prisma.todoList.delete({
      where: {
        id: Number(id),
      },
    });
    const tasks = await prisma.todoList.findMany({
      orderBy: [{ maded: "asc" }, { priority: "desc" }, { name: "asc" }],
    });

    res.status(200).json({ message: "Tarefa deletada com sucesso", tasks });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao deletar tarefa" });
  }
};
