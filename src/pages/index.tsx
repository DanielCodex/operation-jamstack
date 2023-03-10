import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Container from "@components/Container";
import Header from "@components/Header";
import product from "@data/products.json";


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          <div className="mt-4"> 
            <h1 className="font-bold text-3xl text-orange-600 mb-3">
              Random E-commerce w/ fakser.js
            </h1>
            <h2 className="">Woocommerce is not good. just saying</h2>
          </div>
          <ul className="grid grid-cols-auto-fit gap-7">
            {product.map((product) => {
              return (
                <li key={product.id}>
                  <Image
                    width={200}
                    height={200}
                    src={product.image}
                    alt={`some product ${product.product}`}
                    className="rounded-md cursor-pointer hover:opacity-60"
                  />
                  {/* this works as a title alos */}
                  <h3 className="mt-4 text-black font-bold">
                    {product.product}
                  </h3>
                  <h4 className="mt-4 text-green-900">${product.price}</h4>
                  <button className="px-4 py-2 mt-4 cursor-pointer uppercase rounded-md hover:opacity-90 bg-green-500 text-white font-bold">
                    Add to the cart
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <footer className="max-w-5xl mx-auto mt-5 mb-5 text-center text-slate-400">
        &copy; {new Date().getFullYear()} Amir&apos;s store
      </footer>
    </div>
  );
};

export default Home;
