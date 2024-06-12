import {
  serviceCustomDelete,
  serviceCustomGet,
  serviceCustomPost,
  serviceCustomPut,
} from "@/services/services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCustomGet = (queryKey, api) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => serviceCustomGet(api),
  });
};

export const useCustomPost = (queryKey, api) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => serviceCustomPost(data, api),
    onSuccess: () => {
      toast.success("Success Added");
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        "An error has occurred: ",
        error.message && "Something went wrong"
      );
    },
  });
};

export const useCustomPut = (queryKey, api) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => serviceCustomPut(data, api),
    onSuccess: () => {
      toast.success("Success Added");
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        "An error has occurred: ",
        error.message && "Something went wrong"
      );
    },
  });
};

export const useCustomDelete = (queryKey, api) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => serviceCustomDelete(data, api),
    onSuccess: () => {
      toast.success("Success Deleted");
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        "An error has occurred: ",
        error.message && "Something went wrong"
      );
    },
  });
};

const methods = {
  GET: useCustomGet,
  POST: useCustomPost,
  PUT: useCustomPut,
  DELETE: useCustomDelete,
};

export const useHttpRequest = (api, queryKey, method) => {
  const handler = methods[method];
  if (!handler) {
    throw new Error(`Unsupported HTTP method: ${method}`);
  }
  return handler(queryKey, api);
};
