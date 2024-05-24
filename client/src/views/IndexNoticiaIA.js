/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
//import Footer from "components/Footers/Footer.js";

const Header = () => {
  return (
    <header className="bg-primary-800- hero-section-bg-e bg-black text-white p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Noticias IA</h1>
        <nav>
          <a href="#features" className="mx-2">Features</a>
          <a href="#subscribe" className="mx-2">Suscribete</a>
        </nav>
      </div>
    </header>
  );
};


const HeroSection_ = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Landing Page</h2>
        <p className="mb-8">This is a simple landing page created using React and Tailwind CSS.</p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded">Get Started</button>
      </div>
    </section>
  );
};

const HeroSection = () => {//with image
  /*  #FAF5FF #F3E8FF #E9D5FF #D8B4FE #C084FC
      #A855F7 #9333EA #7E22CE #6B21A8 #581C87*/
  //linear-gradient(90deg, #A855F7 0%, #6B21A8 100%)
  //linear-gradient(90deg, blue 0%, red 100%)
  return (//section(relative bg-cover)
    <section className="-hero-section hero-section-bg-f  bg-center h-screen flex items-center">
      {false && <div className="text-9xl align-middle w-full z-0 static">🤖</div>}
      {/*<div className="text-9xl absolute  bg-white-400 w-full text-right pb-80 " >🤖</div>*/}
      <div className="container mx-auto text-center ">{/*z-2*/}
      <h1 className=" text-white font-bold mb-4 text-9xl opacity-80">🤖 </h1>
        <h1 className="text-4xl text-white font-bold mb-4">Noticias IA </h1>
        <p className="text-lg text-white mb-8 font-bold"> Noticias de inteligencia artificial, herramientas y reflexiones.</p>
        <a href="#subscribe" className="cursor-pointer  bg-secondary-600 hover:bg-secondary-400 text-white py-2 px-4 rounded hover:border-coolGray-200">
          Suscribete
        </a>
      </div>
    </section>
  );
  /*border-bottom-color rgb(229, 231, 235)
border-bottom-style solid
border-bottom-width 0px
border-left-color rgb(229, 231, 235)
border-left-style solid
border-left-width 0px
border-right-color rgb(229, 231, 235)
border-right-style solid
border-right-width 0px
border-top-color rgb(229, 231, 235)
border-top-style solid
border-top-width 0px
box-sizing border-box
color rgb(51, 65, 85)
display block
font-family Arial, sans-serif
font-feature-settings normal
font-variation-settings normal
height 300px
line-height 24px
margin-left 114.5px
margin-right 114.5px
max-width 768px
tab-size 4
text-align center
text-size-adjust 100%
unicode-bidi isolate
width 768px
-webkit-font-smoothing antialiased
-webkit-tap-highlight-color rgba(0, 0, 0, 0)

---------
background-color rgb(5, 150, 105)
border-bottom-left-radius 4px
border-bottom-right-radius 4px
border-top-left-radius 4px
border-top-right-radius 4px
color rgb(255, 255, 255)
display inline
height auto
padding-bottom 8px
padding-left 16px
padding-right 16px
padding-top 8px
text-decoration-color rgb(255, 255, 255)
text-decoration-line none
text-decoration-style solid
text-decoration-thickness auto



*/
};


const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Feature One</h3>
              <p>Detail about feature one.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Feature Two</h3>
              <p>Detail about feature two.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Feature Three</h3>
              <p>Detail about feature three.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2024 Noticias IA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const SubscriptionForm = () => {
  return (
    <section className="bg-primary-100 py-20" id="subscribe">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary-900">Suscribete a las noticias de IA</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-left mb-2 text-primary-700 font-bold" htmlFor="name">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-primary-300 rounded"
              placeholder="Tu nombre completo"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-primary-700 font-bold" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-primary-300 rounded"
              placeholder="Tu correo electrónico"
            />
          </div>
          <button
            type="submit"
            className="bg-secondary-500 text-white py-3 px-6 rounded hover:bg-secondary-700 transition duration-300"
          >
            Suscribete
          </button>
        </form>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <SubscriptionForm />
      <Footer />
    </div>
  );
}
export default function Index() {
  return (
    <>
    <App/>
      
    </>
  );
}
