import axios from "axios";
import { getSession } from "next-auth/react";

const getRequest = async (backendUrl, url, session) => {
  const response = await axios.get(backendUrl + url, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + session.token,
    },
  });
  return response.data;
};

const postRequest = async (backendUrl, url, body, session) => {
  const response = await axios.post(backendUrl + url, body, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + session.token,
    },
  });
  return response.data;
};

const putRequest = async (backendUrl, url, body, session) => {
  const response = await axios.put(backendUrl + url, body, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + session.token,
    },
  });
  return response.data;
};

const deleteRequest = async (backendUrl, url, body, session) => {
  const response = await axios.delete(backendUrl + url + "/" + body, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + session.token,
    },
  });
  return response.data;
};

export const httpRequest = async (
  backendUrl,
  url,
  method = "GET",
  body = {},
) => {
  const session = await getSession();
  switch (method) {
    case "GET":
      return getRequest(backendUrl, url, session);

    case "POST":
      return postRequest(backendUrl, url, body, session);

    case "PUT":
      return putRequest(backendUrl, url, body, session);

    case "DELETE":
      return deleteRequest(backendUrl, url, body, session);

    default:
      break;
  }
};
