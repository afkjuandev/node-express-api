import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { sendSuccess, sendError } from "../utils/response";

export const getUsers = (_req: Request, res: Response): void => {
  const users = userService.findAll();
  sendSuccess(res, users);
};

export const getUserById = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const user = userService.findById(id);
  if (!user) {
    sendError(res, "Usuário não encontrado", 404);
    return;
  }
  sendSuccess(res, user);
};

export const createUser = (req: Request, res: Response): void => {
  const user = userService.create(req.body as { name: string; email: string });
  sendSuccess(res, user, 201);
};
