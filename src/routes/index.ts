import { Router } from "express";
import userRoutes from "./user.routes";

const router = Router();

router.use("/users", userRoutes);

// Adicione novas rotas aqui:
// router.use("/auth", authRoutes);
// router.use("/products", productRoutes);

export default router;
