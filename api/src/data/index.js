import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// prisma.users
//   .findMany({
//     where: {
//       email: "henrique@dev.com",
//     },
//   })
//   .then((docs) => console.log(docs))
//   .catch((err) => console.log(err));

// try {
//   const docs = await prisma.users.findMany({
//     where: {
//       email: 'henrique@dev.com',
//     },
//   })
//   console.log(docs)
// } catch (error) {
//   console.log(error)
// }
