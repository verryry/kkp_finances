import Login from "@/components/login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import HomeLayout from "./HomeLayout";

export default function MainLayout({ children }) {
  let session = useSession();

  return (
    <div className="h-screen w-screen">
      {session?.data ? <HomeLayout>{children}</HomeLayout> : <Login />}
    </div>
  );
}
