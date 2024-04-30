import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import Logo from '../../public/assets/Logo.png'
import Mugshot from '../../public/assets/mugshot.png'
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import { SiCalendly } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Home() {



  return (
    <>
      <Head>
        <title>Juliet Charles</title>
        <meta name="description" content="Juliet Charles Marketing Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">

        <div className="header">
          <div className="header-logo">
            <Image src={Logo} width={150} height={150} className="logo"/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <span className="header-logo-text">Juliet Charles</span>
              <span className="header-logo-text">Social Media Marketing</span>
            </div>
          </div>
          <nav>
          <Link href="/"><button className="nav-button">Home</button></Link>
            <Link href="/ProjectsPage"><button className="nav-button">Projects</button></Link>
            <Link href="ContactPage"><button className="nav-button">Contact</button></Link>
          </nav>
        </div>

        <div className="main-content">
          <div className="portfolio-card">

            <div className="portfolio-content">
              <Image src={Mugshot} className="mugshot" width={175}/>
              <h1 style={{margin: '0'}}>Juliet Charles</h1>
              <span style={{borderBottom: '1px solid black', width: '100px'}}>‎</span>
              <h4 style={{marginTop: '20px', marginBottom: '0', letterSpacing: '3px'}}>Social Media Coordinator</h4>
              <h4 style={{marginTop: '0', letterSpacing: '3px'}}>Content & SEO</h4>
            </div>
            
            <div className="card-footer">

              <a href="https://www.linkedin.com/in/julietcharles/">
                <FaLinkedin className="media-icon"/>
              </a>

              <a href="https://www.calendly.com/julietcharles">
                <SiCalendly className="media-icon"/>
              </a>

              <a href="mailto: julietcharles18@gmail.com">
                <MdEmail className="media-icon"/>
              </a>

            </div>

          </div>

          <div className="welcome-blurb">
            <h1>Crafting Digital Narratives & Painting Perspectives</h1>
            <button className="resume-button">RESUME</button>
            <p>An Oregon State University student based out of Beaverton, Oregon, Juliet, <br />
              strives to excel in the realm of social media marketing. <br />
              With a major in digital marketing and a minor in graphic design, <br />
              they fuse creativity with strategy to craft captivating campaigns. <br />
              Their expertise spans content and SEO marketing, particularly within<br />
              e-commerce, where they've demonstrated prowess in driving engagement<br />
              and optimizing visibility. Beyond the digital landscape, they find <br />
              inspiration in painting and literature, infusing their work with creativity <br />
              and narrative depth. Connect today to take your e-commerce business to new heights!</p>
          </div>
        </div>



      </main>
    </>
  );
}
