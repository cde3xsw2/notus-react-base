/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";

const newLocal_57 = "Do you love this Starter Kit?";
const newLocal_58 = `Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version for your next project. Build a
                new web app or give an old project a new look!`;
const newLocal_59 = "Help With a Star";
export default function Index() {
  return (
    <>
      <IndexNavbar fixed />

      <div className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <ul>
          <li><Link to="/index-1">Pechna</Link></li>
          <li><Link to="/index-2">Noticia IA</Link></li>

        </ul>
      </div>
    </>
  );
}


