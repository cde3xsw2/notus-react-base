import React from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Messages } from "assets/messages/Messages";
import { Resources } from "assets/messages/Messages";


const ItemWithIcon= ({reason,iconClass})=><div className="flex items-center">
<div>
  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-sky-600 bg-sky-200 mr-3">
    {iconClass && 
      <i className={iconClass}></i>
    } 
  </span>
</div>
<div>
  <h4 className="text-slate-500">
    {reason}
  </h4>
</div>
</div>

const  CtaReason1 =  <ItemWithIcon
  reason={Messages.ctaReason1}
  iconClass="fas fa-fingerprint"
  ></ItemWithIcon>;

const CtaReason2 = <ItemWithIcon
  reason={Messages.ctaReason2}
  iconClass="fab fa-html5"
  ></ItemWithIcon>;

const CtaReason3 = <ItemWithIcon
  reason={Messages.ctaReason3}
  iconClass="far fa-paper-plane"
  ></ItemWithIcon>;



const ContactForm = <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">
              {Messages.contactFormTitle}
            </h4>
            <p className="leading-relaxed mt-1 mb-4 text-slate-500">
              {Messages.contactFormSubtitle}
            </p>
            <div className="relative w-full mb-3 mt-8">
              <label
                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                {Messages.contactFormFullName}
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder={Messages.contactFormFullName} />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                htmlFor="email"
              >
                {Messages.contactFormEmail}
              </label>
              <input
                type="email"
                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder={Messages.contactFormEmail} />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                htmlFor="message"
              >
                {Messages.contactFormMessage}
              </label>
              <textarea
                rows="4"
                cols="80"
                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder={Messages.contactFormMessagePlaceholder} />
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                {Messages.contactFormSendMessage}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;


const ClosingArgumentReason = ({title,details,iconClass})=> <div className="w-full lg:w-3/12 px-4 text-center">
<div className="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
  {iconClass && <i className={iconClass}></i>}
</div>
<h5 className="text-xl mt-5 font-semibold text-white">
{title}
</h5>
<p className="mt-2 mb-4 text-slate-400">
{details}
</p>
</div>;

const ClosingArgumentComponent = <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
  <div className="flex flex-wrap text-center justify-center">
    <div className="w-full lg:w-6/12 px-4">
      <h2 className="text-4xl font-semibold text-white">
        {Messages.closingArgumentTitle}
      </h2>
      <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-400">
      {Messages.closingArgumentDetails}
      </p>
    </div>
  </div>
  <div className="flex flex-wrap mt-12 justify-center">
    <ClosingArgumentReason
      title={Messages.closingArgumentsReason1}
      details={Messages.closingArgumentsReasonDetail1}
      iconClass="fas fa-medal text-xl"
    ></ClosingArgumentReason>

    <ClosingArgumentReason
      title={Messages.closingArgumentsReason2}
      details={Messages.closingArgumentsReasonDetail2}
      iconClass="fas fa-poll text-xl"
    ></ClosingArgumentReason>

    <ClosingArgumentReason
      title={Messages.closingArgumentsReason3}
      details={Messages.closingArgumentsReasonDetail3}
      iconClass="fas fa-lightbulb text-xl"
    ></ClosingArgumentReason>

  </div>
</div>;

const DribbleButton = <button
  className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
  type="button"
>
  <i className="fab fa-dribbble"></i>
</button>;
const GoogleButton = <button
  className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
  type="button"
>
  <i className="fab fa-google"></i>
</button>;
const TwitterButton = <button
  className="bg-sky-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
  type="button"
>
  <i className="fab fa-twitter"></i>
</button>;
const InstagramButton = <button
  className="bg-slate-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
  type="button"
>
  <i className="fab fa-instagram"></i>
</button>;

const FacebookButton = <button
              className="bg-sky-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >fdfasfas
              <i className="fab fa-facebook"></i>
            </button>;

const TeamMember =({name,job,image,dribbleUrl,twitterUrl,googleUrl,instagramUrl,facebookUrl})=> <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
<div className="px-6">
  <img
    alt="..."
    src={image}
    className="shadow-lg rounded-full mx-auto max-w-120-px" />
  <div className="pt-6 text-center">
    <h5 className="text-xl font-bold">{name}</h5>
    <p className="mt-1 text-sm text-slate-400 uppercase font-semibold">
      {job}
    </p>
    <div className="mt-6">
      {dribbleUrl && DribbleButton}
      {googleUrl && GoogleButton}
      {twitterUrl && TwitterButton}
      {instagramUrl && InstagramButton}
      {facebookUrl && FacebookButton}
    </div>
  </div>
</div>
</div>;


const TeamComponent = <div className="container mx-auto px-4">
  <div className="flex flex-wrap justify-center text-center mb-24">
    <div className="w-full lg:w-6/12 px-4">
      <h2 className="text-4xl font-semibold">{Messages.teamTitle}</h2>
      <p className="text-lg leading-relaxed m-4 text-slate-500">
        {Messages.teamDetails}
      </p>
    </div>
  </div>
  <div className="flex flex-wrap">
    <TeamMember 
      name={Messages.teamMemberName1}  
      job={Messages.teamMemberJob1} 
      image={require("assets/img/team-1-800x800.jpg").default}
      dribbleUrl='true' 
      facebookUrl='true' 
      twitterUrl='true'/>
    <TeamMember 
      name={Messages.teamMemberName2}  
      job={Messages.teamMemberJob2} 
      image={require("assets/img/team-2-800x800.jpg").default}
      googleUrl='true' 
      facebookUrl='true'/>
    <TeamMember 
      name={Messages.teamMemberName3}  
      job={Messages.teamMemberJob3} 
      image={require("assets/img/team-3-800x800.jpg").default}
      googleUrl='true' 
      instagramUrl='true' 
      twitterUrl='true'/>
    <TeamMember 
      name={Messages.teamMemberName4}  
      job={Messages.teamMemberJob4} 
      image={require("assets/img/team-4-470x470.png").default}
      googleUrl='true' 
      dribbleUrl='true' 
      instagramUrl='true' 
      twitterUrl='true'/>
  </div>
</div>;
const CtaComponent = <div className="container mx-auto px-4">
  <div className="items-center flex flex-wrap">
    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img
        alt="..."
        className="max-w-full rounded-lg shadow-lg"
        src={Messages.ctaImage} />
    </div>
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <div className="md:pr-12">
        <div className="text-sky-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-sky-300">
          <i className="fas fa-rocket text-xl"></i>
        </div>
        <h3 className="text-3xl font-semibold">{Messages.ctaTitle}</h3>
        <p className="mt-4 text-lg leading-relaxed text-slate-500">
          {Messages.ctaDetails}
        </p>
        <ul className="list-none mt-6">
          <li className="py-2">
            {CtaReason1}
          </li>
          <li className="py-2">
            {CtaReason2}
          </li>
          <li className="py-2">
            {CtaReason3}
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>;

const FeaturesInfo = <div className="container mx-auto px-4">
  <div className="flex flex-wrap">
    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
            <i className="fas fa-award"></i>
          </div>
          <h6 className="text-xl font-semibold">{Messages.featuresTitle1}</h6>
          <p className="mt-2 mb-4 text-slate-500">
            {Messages.features1}
          </p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-4/12 px-4 text-center">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
            <i className="fas fa-retweet"></i>
          </div>
          <h6 className="text-xl font-semibold">{Messages.featuresTitle2}</h6>
          <p className="mt-2 mb-4 text-slate-500">
            {Messages.features2}
          </p>
        </div>
      </div>
    </div>

    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
            <i className="fas fa-fingerprint"></i>
          </div>
          <h6 className="text-xl font-semibold">{Messages.featuresTitle3}</h6>
          <p className="mt-2 mb-4 text-slate-500">
            {Messages.features3}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="flex flex-wrap items-center mt-32">
    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
        <i className="fas fa-user-friends text-xl"></i>
      </div>
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        {Messages.whyUsTitle}
      </h3>
      <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
        {Messages.whyUsDetails1}
      </p>
      <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-600">
        {Messages.whyUsDetails2}
      </p>
      <Link to="/" className="font-bold text-slate-700 mt-8">
        {Messages.whyUsTextLink}
      </Link>
    </div>

    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-700  ">
        <img
          alt="..."
          src={Messages.whyUsBannerImage}
          className="w-full align-middle rounded-t-lg" />
        <blockquote className="relative p-8 mb-4">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 w-full block h-95-px -top-94-px"
          >
            <polygon
              points="-30,95 583,95 583,65"
              className="text-sky-700 fill-current"
            ></polygon>
          </svg>
          <h4 className="text-xl font-bold text-white">
            {Messages.whyUsBannerTitle}
          </h4>
          <p className="text-md font-light mt-2 text-white">
            {Messages.whyUsBannerDetails}
          </p>
        </blockquote>
      </div>
    </div>
  </div>
</div>;


const HeadLine = <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
  <div
    className="absolute top-0 w-full h-full bg-center bg-cover"
    style={{
      backgroundImage: Resources.backgroundImage,
    }}
  >
    <span
      id="blackOverlay"
      className="w-full h-full absolute opacity-75 bg-black"
    ></span>
  </div>
  <div className="container relative mx-auto">
    <div className="items-center flex flex-wrap">
      <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
        <div className="pr-12">
          <h1 className="text-white font-semibold text-5xl">
            {Messages.title}
          </h1>
          <p className="mt-4 text-lg text-slate-200">
            {Messages.subtitle}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
    style={{ transform: "translateZ(0)" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="text-slate-200 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
</div>;
const ClosingArgumentSeparator = <div
  className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
  style={{ transform: "translateZ(0)" }}
>
  <svg
    className="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
  >
    <polygon
      className="text-slate-800 fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>;

const CtaSeparator = <div
  className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
  style={{ transform: "translateZ(0)" }}
>
  <svg
    className="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
  >
    <polygon
      className="text-white fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>;
export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        {HeadLine}
        <section className="pb-20 bg-slate-200 -mt-24">
          {FeaturesInfo}
        </section>
        <section className="relative py-20">
          {CtaSeparator}

          {CtaComponent}
        </section>

        <section className="pt-20 pb-48">
          {TeamComponent}
        </section>

        <section className="pb-20 relative block bg-slate-800">
          {ClosingArgumentSeparator}

          {ClosingArgumentComponent}
        </section>
        <section className="relative block py-24 lg:pt-0 bg-slate-800">
          {ContactForm}
        </section>
      </main>
      <Footer />
    </>
  );
}
