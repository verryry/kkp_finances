import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "@/layouts/MainLayout";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <main className={inter.className}>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <MainLayout>
            <Component {...pageProps} />
            <Toaster
              richColors
              closeButton
              position="top-center"
              duration={10000}
            />
          </MainLayout>
        </QueryClientProvider>
      </SessionProvider>
    </main>
  );
}
