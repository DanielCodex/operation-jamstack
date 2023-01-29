import type { NextPage } from "next";
import Head from "next/head";
import Button from "@components/Button";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-2xl font-bold underline capitalize">My name is daniel</div>
    </div>
  );
};

export default Home;
