import { Response } from "express";
import { ApiResponse } from "../types/api.types";

export function sendSuccess<T>(res: Response, data: T, statusCode = 200): void {
  const response: ApiResponse<T> = { success: true, data };
  res.status(statusCode).json(response);
}

export function sendError(
  res: Response,
  message: string,
  statusCode = 400,
  errors?: string[]
): void {
  const response: ApiResponse = { success: false, message, errors };
  res.status(statusCode).json(response);
}
