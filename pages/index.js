import Link from "next/link";
import Head from "next/head";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import { RepositoryTopBlock } from "../components/Repository/TopBlock";

const Index = () => {
  return (
    <div id="wrapper">
      <Head>
        <title>FrontEnd UI List / Jung Issei</title>
      </Head>

      <header>
        <Header />
      </header>
      <main>

        <RepositoryTopBlock />

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
