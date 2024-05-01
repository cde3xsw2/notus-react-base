/*eslint-disable*/
import React, { useState } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { GreenCircle,SalesIcon,EditIcon,PreviewIcon,DeleteIcon,YellowCircle,RedCircle,OrangeCircle } from "components/Crud/Icons";
import { Rating, } from "components/Crud/PageComponents";
import { UpdateProduct } from "components/Crud/UpdateProduct";
import { CreateProduct } from "components/Crud/CreateProduct";
import { ViewProduct } from "components/Crud/ViewProduct";
import { TableComponent } from "./TableComponent";
import { DeleteProduct } from "components/Crud/DeleteProduct";




export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      {
        <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
          <Section2 />
        </section>
      }
      <Footer />
    </>
  );
}

const Sub1 = (
  <div
    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
        className="text-blueGray-100 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
);

const Sub2 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const [editing, setEditing] = useState(false);
  const [creating, setCreating] = useState(false);
  const [viewing, setViewing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const styles = {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "background.paper",
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-10/12  px-12 md:px-4 mr-auto ml-auto mt-2 ">
          {/**** */}
          {/*<!-- Start block -->*/}
          <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
            {TableComponent(setCreating, handleClickAway, handleClick, open, setEditing, setViewing,setDeleting)}
          </section>
          {/*<!-- End block -->*/}

          <DeleteProduct 
            deleting={deleting} 
            closeFn={e=>setDeleting(false)}
          />
          <CreateProduct
            creating={creating}
            closeFn={(e) => setCreating(false)}
          />
          {/*<!-- drawer component -->*/}
          <UpdateProduct editing={editing} closeFn={(e) => setEditing(false)} />

          {/*<!-- Preview Drawer -->*/}
          {/*  transform-none
-translate-x-full */}

          <ViewProduct viewing={viewing} closeFn={(e) => setViewing(false)} />
          {(editing || viewing || creating||deleting) && (
            <div
              drawer-backdrop=""
              class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
            ></div>
          )}


          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>

          {/**** */}
        </div>
      </div>
      <div className="flex flex-wrap items-center"></div>
    </div>
  );
};

function Section2() {
  return (
    <>
      {Sub1}
      <Sub2 />
    </>
  );
}


