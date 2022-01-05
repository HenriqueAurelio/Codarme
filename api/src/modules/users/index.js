import { prisma } from "~/data";
<<<<<<< HEAD
=======
import jwt from "jsonwebtoken";

export const login = async (ctx) => {
  try {
    const { email, password } = ctx.request.body;
    const [user] = await prisma.user.findMany({
      where: { email, password },
    });
    if (!user) {
      ctx.status = 404;
      return;
    }
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);
    ctx.body = { user, token };
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Ops! Algo deu errado, tente novamente";
  }
};
>>>>>>> main

export const list = async (ctx) => {
  try {
    const users = await prisma.user.findMany();
    ctx.body = users;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Ops! Algo deu errado, tente novamente";
  }
};

export const create = async (ctx) => {
  try {
    const user = await prisma.user.create({ data: ctx.request.body });
    ctx.body = user;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Ops! Algo deu errado, tente novamente";
  }
};

export const update = async (ctx) => {
  const { name, email } = ctx.request.body;
  try {
    const user = await prisma.user.update({
      where: { id: ctx.params.id },
      data: { name, email },
    });
    ctx.body = user;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Ops! Algo deu errado, tente novamente";
  }
};

export const remove = async (ctx) => {
  try {
    await prisma.user.delete({
      where: { id: ctx.params.id },
    });
    ctx.body = { id: ctx.params.id };
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Ops! Algo deu errado, tente novamente";
  }
};