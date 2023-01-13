import Head from "next/head";
import { GetStaticProps } from "next";

export default function Home(props: GetStaticProps) {
  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <main>
        <div className="text-2xl font-bold text-center">NextJS App</div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
