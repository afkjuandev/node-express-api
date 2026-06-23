import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app";

describe("GET /users", () => {
  it("deve retornar status 200 e array vazio", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toBeInstanceOf(Array);
  });
});

describe("POST /users", () => {
  it("deve criar um usuário com dados válidos", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "João Silva", email: "joao@email.com" });
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toMatchObject({ name: "João Silva", email: "joao@email.com" });
  });

  it("deve retornar 422 com e-mail inválido", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Maria", email: "nao-e-email" });
    expect(res.status).toBe(422);
    expect(res.body.success).toBe(false);
  });
});

describe("GET /users/:id", () => {
  it("deve retornar 404 para usuário inexistente", async () => {
    const res = await request(app).get("/users/999");
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
  });
});

describe("Rota inexistente", () => {
  it("deve retornar 404", async () => {
    const res = await request(app).get("/rota-que-nao-existe");
    expect(res.status).toBe(404);
  });
});
