import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, LockOpenIcon, User2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { EyeOffIcon } from "lucide-react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { LoaderCircleIcon } from "lucide-react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

const formSchema = z.object({
  username: z.string().min(1, { message: "Username is invalid" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { push, query } = useRouter();
  const callbackUrl = query.callbackUrl || "/";

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username: data.username,
        password: data.password,
        callbackUrl,
      });

      if (!res?.error) {
        push(callbackUrl);
      } else {
        const errMessage = JSON.parse(res.error);
        setError(
          `Invalid User ID or password. Error : ${errMessage.errors} Status : ${errMessage.status}`
        );
        // setError("Invalid User ID or password");
        console.error("Authentication failed:", JSON.parse(res.error));
      }
    } catch (error) {
      setLoading(false);
      console.error(
        "An unexpected error occurred during authentication:",
        error
      );
      setError("Internal server error");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="username"
                    >
                      Username
                    </FormLabel>
                    <FormControl>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User2Icon className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          className="block w-full pl-10 pr-3 py-2 rounded-md border-gray-300 focus:outline-none sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 "
                          id="username"
                          placeholder="Enter your username"
                          type="text"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      htmlFor="password"
                    >
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockOpenIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          className="block w-full pl-10 pr-3 py-2 rounded-md border-gray-300 focus:outline-none sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 "
                          id="password"
                          placeholder="Enter your password"
                          type={showPassword ? "text" : "password"}
                          {...field}
                        />
                        <div
                          className="absolute right-1 top-2 size-7 cursor-pointer"
                          onClick={togglePassword}
                        >
                          {showPassword ? (
                            <EyeIcon className="size-6" />
                          ) : (
                            <EyeOffIcon className="size-6" />
                          )}
                          <span className="sr-only">
                            Toggle password visibility
                          </span>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-950 dark:bg-black dark:hover:bg-gray-900 dark:focus:ring-gray-300"
                type="submit"
                disabled={loading}
              >
                {loading && (
                  <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Log In
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Link
            className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            href="#"
          >
            Forgot password?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
