export interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [];
let nextId = 1;

export const userService = {
  findAll(): User[] {
    return users;
  },

  findById(id: number): User | undefined {
    return users.find((u) => u.id === id);
  },

  create(data: Omit<User, "id">): User {
    const user: User = { id: nextId++, ...data };
    users.push(user);
    return user;
  },
};
