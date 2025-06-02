import { Router } from "express";
import {
  createTask,
  listTasks,
  deleteTask,
  updateTask,
  concludeTask,
} from "../controllers/TodoListController";

const router = Router();

const routes = [
  { method: "post", path: "/create", handler: createTask },
  { method: "get", path: "/", handler: listTasks },
  { method: "put", path: "/:id/conclude", handler: concludeTask },
  { method: "put", path: "/:id", handler: updateTask },
  { method: "delete", path: "/:id", handler: deleteTask },
];

routes.forEach(({ method, path, handler }) => {
  (router as any)[method](path, handler);
});

export default router;
