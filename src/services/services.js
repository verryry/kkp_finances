import { httpRequest } from "@/lib/httpRequest";

export const serviceCustomGet = async (api) => {
  const response = await httpRequest(
    process.env.NEXT_PUBLIC_API_DEFAULT,
    api,
    "GET"
  );
  return response;
};

export const serviceCustomPost = async (data, api) => {
  const response = await httpRequest(
    process.env.NEXT_PUBLIC_API_DEFAULT,
    api,
    "POST",
    data
  );
  return response;
};

export const serviceCustomPut = async (data, api) => {
  const response = await httpRequest(
    process.env.NEXT_PUBLIC_API_DEFAULT,
    `${api}/${data.id}`,
    "PUT",
    data
  );
  return response;
};

export const serviceCustomDelete = async (data, api) => {
  const response = await httpRequest(
    process.env.NEXT_PUBLIC_API_DEFAULT,
    api,
    "DELETE",
    data
  );
  return response;
};

export const serviceHttpRequest = async (url, method, data) => {};
