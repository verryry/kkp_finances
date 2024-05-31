import { serviceGetDataByColumns } from "@/lib/services";
import { compare } from "bcrypt";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;

        const user = await serviceGetDataByColumns(
          "user",
          "username",
          username
        );
        if (user) {
          const passwordConf = await compare(password, user?.password);
          if (passwordConf) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, account, profile, user }) => {
      if (account?.provider === "credentials") {
        token = { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }) {
      session = { ...session, ...token };
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
