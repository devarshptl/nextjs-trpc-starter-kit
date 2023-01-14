import Head from "next/head";
import { trpc } from "@/utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "Next.js User" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <main>
        <div className="text-2xl font-bold text-center">
          {hello.data.greeting}
        </div>
      </main>
    </>
  );
}
