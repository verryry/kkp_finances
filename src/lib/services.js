import { prisma } from "./db";

export const serviceGetAllData = async (table) => {
  const data = await prisma[table].findMany();

  return data;
};

export const servicePostData = async (table, data) => {
  const create = await prisma[table].create({
    data,
  });
  return create;
};

export const serviceGetDataByColumns = async (table, columns, value) => {
  const data = await prisma[table].findUnique({
    where: {
      [columns]: value,
    },
  });
  return data;
};

export const serviceDeleteData = async (table, columns, value) => {
  const deleteData = await prisma[table].delete({
    where: {
      [columns]: value,
    },
  });
  return deleteData;
};
