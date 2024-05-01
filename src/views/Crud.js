/*eslint-disable*/
import React, { useState } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Box from "@mui/material/Box";
import { FilterOptions } from "components/Crud/FilterOptions.js";
import { MoreInfoIcon,SettingsIcon,SearchIcon, AddIcon2,FilterIcon,ArrowDownIcon,GreenCircle,SalesIcon,EditIcon,PreviewIcon,DeleteIcon,YellowCircle,RedCircle,OrangeCircle } from "components/Crud/Icons";
import { Rating, } from "components/Crud/PageComponents";
import { UpdateProduct } from "components/Crud/UpdateProduct";
import { CreateProduct } from "components/Crud/CreateProduct";
import { ViewProduct } from "components/Crud/ViewProduct";


const products = [
  {
    name: "Xbox Series S",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png",
    category: "Console",
    stock: 450,
    salesDay: 1.61,
    salesMonth: 0.3,
    sales: 99,
    rating: 5.0,
    revenue: "$345K",
  },
  {
    name: "Apple iPad Air",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-ipad-air.png",
    category: "Tablet",
    stock: 287,
    salesDay: 0.47,
    salesMonth: 1.0,
    sales: "298K",
    rating: 4.0,
    revenue: "$425K",
  },
  {
    name: "PlayStation 5",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png",
    category: "Console",
    stock: 2435,
    salesDay: 1.41,
    salesMonth: 0.11,
    sales: "2.1M",
    rating: 3.0,
    revenue: "$4.2M",
  },
  {
    name: "Xbox Series X",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-x.png",
    category: "Gaming/Console",
    stock: 235,
    salesDay: 7.09,
    salesMonth: 3.32,
    sales: "989K",
    rating: 4.0,
    revenue: "$2.27M",
  },
  {
    name: "Apple iPhone 14",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-iphone-14.png",
    category: "Phone",
    stock: 24,
    salesDay: 1.09,
    salesMonth: 0.95,
    sales: "1.2M",
    rating: 5.0,
    revenue: "$3.2M",
  },
  {
    name: "Apple iMac 27&#34;",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
    category: "Desktop PC",
    stock: 95,
    salesDay: 1.47,
    salesMonth: 0.47,
    sales: "1.6M",
    rating: 4.0,
    revenue: "$3.2M",
  },
  {
    name: "Apple iMac 20&#34;",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png",
    category: "Desktop PC",
    stock: 108,
    salesDay: 1.15,
    salesMonth: 0.32,
    sales: "6M",
    rating: 3.0,
    revenue: "$785K",
  },
];

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
            <div class="mx-auto max-w-screen-2xl px-4 lg:px-12">
              <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div class="flex-1 flex items-center space-x-2">
                    <h5>
                      <span class="text-gray-500">All Products:</span>
                      <span class="dark:text-white">123456</span>
                    </h5>
                    <h5 class="text-gray-500 dark:text-gray-400 ml-1">
                      1-100 (436)
                    </h5>
                    <button
                      type="button"
                      class="group"
                      data-tooltip-target="results-tooltip"
                    >
                      {MoreInfoIcon}
                      <span class="sr-only">More info</span>
                    </button>
                    <div
                      id="results-tooltip"
                      role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Showing 1-100 of 436 results
                      <div class="tooltip-arrow" data-popper-arrow=""></div>
                    </div>
                  </div>
                  <div class="flex-shrink-0 flex flex-col items-start md:flex-row md:items-center lg:justify-end space-y-3 md:space-y-0 md:space-x-3">
                    <button
                      type="button"
                      class="flex-shrink-0 inline-flex items-center justify-center py-2 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      {SettingsIcon}
                      Table settings
                    </button>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
                  <div class="w-full md:w-1/2">
                    <form class="flex items-center">
                      <label for="simple-search" class="sr-only">
                        Search
                      </label>
                      <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          {SearchIcon}
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          placeholder="Search for products"
                          required=""
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button
                      onClick={(e) => setCreating(true)}
                      type="button"
                      id="createProductButton"
                      data-modal-toggle="createProductModal"
                      class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                      {AddIcon2()}
                      Add product
                    </button>
                    <ClickAwayListener onClickAway={handleClickAway}>
                      <Box sx={{ position: "relative" }} alignSelf={true}>
                        <button
                          id="filterDropdownButton"
                          onClick={handleClick}
                          data-dropdown-toggle="filterDropdown"
                          class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          type="button"
                        >
                          {FilterIcon}
                          Filter options
                          {ArrowDownIcon}
                        </button>
                        {/** class="z-10 hidden px-3 pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700 right-0"*/}
                        {/**filterDropdown:inset: '0px auto auto 0px', margin: '0px',transform: 'translate3d(582.5px, 131px, 0px)' */}
                        {open ? <FilterOptions/> : null}
                      </Box>
                    </ClickAwayListener>
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                      <button
                        id="actionsDropdownButton"
                        data-dropdown-toggle="actionsDropdown"
                        class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        type="button"
                      >
                        Actions
                        {ArrowDownIcon}
                      </button>
                      <div
                        id="actionsDropdown"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                      >
                        <ul
                          class="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="actionsDropdownButton"
                        >
                          <li>
                            <a
                              href="#"
                              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Mass Edit
                            </a>
                          </li>
                        </ul>
                        <div class="py-1">
                          <a
                            href="#"
                            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Delete all
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="overflow-x-auto">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-all"
                              type="checkbox"
                              class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-all" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </th>
                        <th scope="col" class="p-4">
                          Product
                        </th>
                        <th scope="col" class="p-4">
                          Category
                        </th>
                        <th scope="col" class="p-4">
                          Stock
                        </th>
                        <th scope="col" class="p-4">
                          Sales/Day
                        </th>
                        <th scope="col" class="p-4">
                          Sales/Month
                        </th>
                        <th scope="col" class="p-4">
                          Rating
                        </th>
                        <th scope="col" class="p-4">
                          Sales
                        </th>
                        <th scope="col" class="p-4">
                          Revenue
                        </th>
                        <th scope="col" class="p-4">
                          Last Update
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        /*products*/ products.map((p) => (
                          <Row
                            name={p.name}
                            image={p.image}
                            category={p.category}
                            stock={p.stock}
                            salesDay={p.salesDay}
                            salesMonth={p.salesMonth}
                            rating={p.rating}
                            sales={p.sales}
                            revenue={p.revenue}
                            editFn={(e) => setEditing(true)}
                            viewFn={(e) => setViewing(true)}
                          ></Row>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
                <nav
                  class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                  aria-label="Table navigation"
                >
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span class="font-semibold text-gray-900 dark:text-white">
                      1-10
                    </span>
                    of
                    <span class="font-semibold text-gray-900 dark:text-white">
                      1000
                    </span>
                  </span>
                  <ul class="inline-flex items-stretch -space-x-px">
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <span class="sr-only">Previous</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        ...
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        100
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <span class="sr-only">Next</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/*<!-- End block -->*/}

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
          {(editing || viewing || creating) && (
            <div
              drawer-backdrop=""
              class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
            ></div>
          )}

          {/*<!-- Delete Modal -->*/}
          <div
            id="delete-modal"
            tabindex="-1"
            class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative w-full h-auto max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="delete-modal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                  </h3>
                  <button
                    data-modal-toggle="delete-modal"
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-toggle="delete-modal"
                    type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>

          {/**** */}
        </div>
      </div>
      <div className="flex flex-wrap items-center"></div>
    </div>
  );
};


const getStockStatus = (stock) => {
  if (!stock) {
    return;
  }
  if (stock < 25) {
    return RedCircle;
  } else if (stock < 100) {
    return OrangeCircle;
  } else if (stock < 300) {
    return YellowCircle;
  } else {
    return GreenCircle;
  }
};

function Row({
  name,
  image,
  category,
  stock,
  salesDay,
  salesMonth,
  rating,
  sales,
  revenue,
  editFn,
  viewFn,
}) {
  const rowStyle =
    "px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white";
  return (
    <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
      <td class="p-4 w-4">
        <div class="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            onclick="event.stopPropagation()"
            class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-table-search-1" class="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th scope="row" class={rowStyle}>
        <div class="flex items-center mr-3">
          {image && (
            <img src={image} alt="iMac Front Image" class="h-8 w-auto mr-3" />
          )}
          {name}
        </div>
      </th>
      <td class="px-4 py-3">
        <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
          {category}
        </span>
      </td>
      <td class={rowStyle}>
        <div class="flex items-center">
          {getStockStatus(stock)}
          {stock}
        </div>
      </td>
      <td class={rowStyle}>{salesDay}</td>
      <td class={rowStyle}>{salesMonth}</td>
      <td class={rowStyle}>
        <div class="flex items-center">
          <Rating rating={rating} />
          <span class="text-gray-500 dark:text-gray-400 ml-1">{rating}</span>
        </div>
      </td>
      <td class={rowStyle}>
        <div class="flex items-center">
          {SalesIcon}
          {sales}
        </div>
      </td>
      <td class="px-4 py-3">{revenue}</td>
      <td class={rowStyle}>
        <div class="flex items-center space-x-4">
          <button
            onClick={editFn}
            type="button"
            data-drawer-target="drawer-update-product"
            data-drawer-show="drawer-update-product"
            aria-controls="drawer-update-product"
            class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {EditIcon}
            Edit
          </button>
          <button
            onClick={viewFn}
            type="button"
            data-drawer-target="drawer-read-product-advanced"
            data-drawer-show="drawer-read-product-advanced"
            aria-controls="drawer-read-product-advanced"
            class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {PreviewIcon}
            Preview
          </button>
          <button
            type="button"
            data-modal-target="delete-modal"
            data-modal-toggle="delete-modal"
            class="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            {DeleteIcon}
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}



function Section2() {
  return (
    <>
      {Sub1}
      <Sub2 />
    </>
  );
}


