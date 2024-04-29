import Head from "next/head";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

export default function Home() {




  return (
    <>
      <Head>
        <title>Juliet Charles</title>
        <meta name="description" content="Juliet Charles Marketing Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="header">
          <nav>
            <button>Home</button>
            <button>Projects</button>
            <button>Contact</button>
          </nav>

          <FaLinkedin className="linkedin-icon"/>

        </div>
      </main>
    </>
  );
}
