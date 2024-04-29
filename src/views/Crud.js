/*eslint-disable*/
import React, { useState } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Box from "@mui/material/Box";

const MoreInfoIcon = (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    viewbox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clip-rule="evenodd"
    />
  </svg>
);
const SettingsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 24 24"
    fill="currentColor"
    class="mr-2 w-4 h-4"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
    />
  </svg>
);
const SearchIcon = (
  <svg
    aria-hidden="true"
    class="w-5 h-5 text-gray-500 dark:text-gray-400"
    fill="currentColor"
    viewbox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    />
  </svg>
);

const AddIcon = (
  <svg
    class="h-3.5 w-3.5 mr-1.5 -ml-1"
    fill="currentColor"
    viewbox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      className="scale-75"
      clip-rule="evenodd"
      fill-rule="evenodd"
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
    />
  </svg>
);
const FilterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    class="h-4 w-4 mr-1.5 -ml-1 text-gray-400"
    viewbox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
      clip-rule="evenodd"
    />
  </svg>
);
const ArrowDownIcon = (
  <svg
    class="-mr-1 ml-1.5 w-5 h-5"
    fill="currentColor"
    viewbox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      clip-rule="evenodd"
      fill-rule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    />
  </svg>
);
const Rating = ({ rating }) => {
  return (
    <>
      {rating &&
        Array(Number(rating))
          .fill()
          .map((e) => YellowStar)}
      {rating &&
        Array(5 - Number(rating))
          .fill()
          .map((e) => WhiteStar)}
    </>
  );
};

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
                      <svg
                        class="h-3.5 w-3.5 mr-1.5 -ml-1"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          className="scale-75"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        />
                      </svg>
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
                        <svg
                          class="-mr-1 ml-1.5 w-5 h-5"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          />
                        </svg>
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

function FilterOptions() {
  const [displayCategory,setDisplayCategory]= useState(false);
  const [displayPrice,setDisplayPrice]= useState(false);
  const [displayWorldWideShipping,setDisplayWorldWideShipping]= useState(false);
  const [displayRating,setDisplayRating]= useState(false);
  return (
    <div
      id="filterDropdown"
      className="z-10 px-3 pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700 right-0 block"
      style={{ position: "absolute" }}
    >
      <div class="flex items-center justify-between pt-2">
        <h6 class="text-sm font-medium text-black dark:text-white">Filters</h6>
        <div class="flex items-center space-x-3">
          <a
            href="#"
            class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Save view
          </a>
          <a
            href="#"
            class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Clear all
          </a>
        </div>
      </div>
      <div class="pt-3 pb-2">
        <label for="input-group-search" class="sr-only">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-search"
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Search keywords..."
          />
        </div>
      </div>
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="text-black dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {/*<!-- Category -->*/}
        <h2 id="category-heading">
          <button
            onClick={e=>setDisplayCategory(!displayCategory)}
            type="button"
            class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            data-accordion-target="#category-body"
            aria-expanded="true"
            aria-controls="category-body"
          >
            <span>Category</span>
            <svg
              aria-hidden="true"
              data-accordion-icon=""
              class="w-5 h-5 rotate-180 shrink-0"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
        </h2>
        <div
          id="category-body"
          class={displayCategory ? '' : 'hidden'}
          aria-labelledby="category-heading"
        >
          <div class="py-2 font-light border-b border-gray-200 dark:border-gray-600">
            <ul class="space-y-2">
              <li class="flex items-center">
                <Checkbox fieldLabel="Apple (56)" fieldName="apple"/>
              </li>
              <li class="flex items-center">
              <Checkbox fieldLabel="Microsoft (45)" fieldName="microsoft"/>
              </li>
              <li class="flex items-center">
              <Checkbox fieldLabel="Logitech (97)" fieldName="logitech"/>
              </li>
              <li class="flex items-center">
              <Checkbox fieldLabel="Sony (234)" fieldName="sony"/>
              </li>
              <li class="flex items-center">
              <Checkbox fieldLabel="Asus (97)" fieldName="asus"/>
              </li>
              <li class="flex items-center">
              <Checkbox fieldLabel="Dell (56)" fieldName="dell"/>
              </li>
              <li class="flex items-center">
              <Checkbox fieldLabel="MSI (97)" fieldName="msi"/>
              </li>
              <li class="flex items-center">
              <Checkbox fieldLabel="Canon (49)" fieldName="canon"/>
              </li>
              <li class="flex items-center">
              <Checkbox fieldLabel="BenQ (23)" fieldName="benq"/>
              </li>
              <li class="flex items-center">
              <Checkbox fieldLabel="Razor (49)" fieldName="razor"/>
              </li>
              <a
                href="#"
                class="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                View all
              </a>
            </ul>
          </div>
        </div>
        {/*<!-- Price -->*/}
        <h2 id="price-heading">
          <button
          onClick={e=>setDisplayPrice(!displayPrice)}
            type="button"
            class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            data-accordion-target="#price-body"
            aria-expanded="true"
            aria-controls="price-body"
          >
            <span>Price</span>
            <svg
              aria-hidden="true"
              data-accordion-icon=""
              class="w-5 h-5 rotate-180 shrink-0"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
        </h2>
        <div id="price-body" class={ displayPrice ? '':'hidden'} aria-labelledby="price-heading">
          <div class="flex items-center py-2 space-x-3 font-light border-b border-gray-200 dark:border-gray-600">
            <select
              id="price-from"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option disabled="" selected="">
                From
              </option>
              <option>$500</option>
              <option>$2500</option>
              <option>$5000</option>
            </select>
            <select
              id="price-to"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option disabled="" selected="">
                To
              </option>
              <option>$500</option>
              <option>$2500</option>
              <option>$5000</option>
            </select>
          </div>
        </div>
        {/*<!-- Worldwide Shipping -->*/}
        <h2 id="worldwide-shipping-heading">
          <button
            onClick={e=>setDisplayWorldWideShipping(!displayWorldWideShipping)}
            type="button"
            class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            data-accordion-target="#worldwide-shipping-body"
            aria-expanded="true"
            aria-controls="worldwide-shipping-body"
          >
            <span>Worldwide Shipping</span>
            <svg
              aria-hidden="true"
              data-accordion-icon=""
              class="w-5 h-5 rotate-180 shrink-0"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
        </h2>
        <div
          id="worldwide-shipping-body"
          class={ displayWorldWideShipping ? '':'hidden'}
          aria-labelledby="worldwide-shipping-heading"
        >
          <div class="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
            <label class="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                name="shipping"
                checked=""
              />
              <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                North America
              </span>
            </label>
            <label class="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                name="shipping"
              />
              <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                South America
              </span>
            </label>
            <label class="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                name="shipping"
              />
              <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Asia
              </span>
            </label>
            <label class="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                name="shipping"
                checked=""
              />
              <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Australia
              </span>
            </label>
            <label class="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                name="shipping"
              />
              <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Europe
              </span>
            </label>
          </div>
        </div>
        {/*<!-- Rating -->*/}
        <h2 id="rating-heading">
          <button
            onClick={e=>setDisplayRating(!displayRating)}
            type="button"
            class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            data-accordion-target="#rating-body"
            aria-expanded="true"
            aria-controls="rating-body"
          >
            <span>Rating</span>
            <svg
              aria-hidden="true"
              data-accordion-icon=""
              class="w-5 h-5 rotate-180 shrink-0"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
        </h2>
        <div id="rating-body" class={displayRating ? '' : 'hidden'}
         aria-labelledby="rating-heading">
          <div class="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
            <div class="flex items-center">
              <input
                id="five-stars"
                type="radio"
                value=""
                name="rating"
                class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="five-stars" class="flex items-center ml-2">
                <Rating rating={5}></Rating>
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="four-stars"
                type="radio"
                value=""
                name="rating"
                class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="four-stars" class="flex items-center ml-2">
                <Rating rating={4} />
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="three-stars"
                type="radio"
                value=""
                name="rating"
                checked=""
                class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="three-stars" class="flex items-center ml-2">
                <Rating rating={3} />
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="two-stars"
                type="radio"
                value=""
                name="rating"
                class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="two-stars" class="flex items-center ml-2">
                <Rating rating={2} />
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="one-star"
                type="radio"
                value=""
                name="rating"
                class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="one-star" class="flex items-center ml-2">
                <Rating rating={1} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function newFunction_2() {
  return (
    <div class="grid grid-cols-2 gap-4 mt-6 sm:w-1/2">
      <button
        type="submit"
        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Update product
      </button>
      <button
        type="button"
        class="text-red-600 inline-flex justify-center items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 mr-1 -ml-1"
          fill="currentColor"
          viewbox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        Delete
      </button>
    </div>
  );
}

function newFunction_1() {
  return (
    <div class="space-y-4 sm:space-y-6">
      <div>
        <label
          for="product-brand"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Brand
        </label>
        <input
          type="text"
          id="product-brand"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value="Apple"
          placeholder="Product Brand"
          required=""
        />
      </div>
      <div>
        <label
          for="category"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <select
          id="category"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        >
          <option selected="">Electronics</option>
          <option value="TV">TV/Monitors</option>
          <option value="PC">PC</option>
          <option value="GA">Gaming/Console</option>
          <option value="PH">Phones</option>
        </select>
      </div>
      <div>
      <InputField type="number" fieldName="item-weight" placeholder="Ex. 12" value="12"/>
      </div>
      <div>
        <label
          for="length"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Length (cm)
        </label>
        <InputField type="lenght" fieldName="lenght" placeholder="Ex. 105" value="105"/>
      </div>
      <div>
        <label
          for="breadth"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Breadth (cm)
        </label>
        <InputField type="number" fieldName="breadth" placeholder="Ex. 15" value="15"/>
      </div>
      <div>
        <label
          for="width"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Width (cm)
        </label>
        <InputField type="number" fieldName="width" placeholder="Ex. 23" value="23"/>
      </div>
    </div>
  );
}

function newFunction() {}

const YellowStar = (
  <svg
    aria-hidden="true"
    class="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewbox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const WhiteStar = (
  <svg
    aria-hidden="true"
    class="w-5 h-5 text-gray-300 dark:text-gray-500"
    fill="currentColor"
    viewbox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const RedCircle = (
  <div class="h-4 w-4 rounded-full inline-block mr-2 bg-red-700"></div>
);
const YellowCircle = (
  <div class="h-4 w-4 rounded-full inline-block mr-2 bg-yellow-300"></div>
);
const GreenCircle = (
  <div class="h-4 w-4 rounded-full inline-block mr-2 bg-green-400"></div>
);
const OrangeCircle = (
  <div class="h-4 w-4 rounded-full inline-block mr-2 bg-orange-500"></div>
);

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

const DeleteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 mr-2 -ml-0.5"
    viewbox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      className="scale-75"
      fill-rule="evenodd"
      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
      clip-rule="evenodd"
    />
  </svg>
);

const PreviewIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 24 24"
    fill="currentColor"
    class="w-4 h-4 mr-2 -ml-0.5"
  >
    <path className="scale-75" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path
      className="scale-75"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
    />
  </svg>
);

const EditIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 mr-2 -ml-0.5"
    viewbox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      className="scale-75"
      d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
    />
    <path
      className="scale-75"
      fill-rule="evenodd"
      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
      clip-rule="evenodd"
    />
  </svg>
);

const SalesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 24 24"
    fill="currentColor"
    class="w-5 h-5 text-gray-400 mr-2"
    aria-hidden="true"
  >
    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
  </svg>
);

function Section2() {
  return (
    <>
      {Sub1}
      <Sub2 />
    </>
  );
}

function UpdateProduct({ editing, closeFn }) {
  return (
    <div className=" ">
      {" "}
      {/**pt-28 */}
      <form
        action="#"
        id="drawer-update-product"
        class={`fixed top-0 left-0 z-40 w-full h-screen max-w-3xl p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800 ${
          editing ? "transform-none mt-20 pb-24" : "-translate-x-full"
        } dark:bg-gray-800`}
        tabindex="-1"
        aria-labelledby="drawer-update-product-label"
        aria-hidden="true"
      >
        <h5
          id="drawer-label"
          class="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          New Product
        </h5>
        <button
          onClick={closeFn}
          type="button"
          data-drawer-dismiss="drawer-update-product"
          aria-controls="drawer-update-product"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CloseIcon />
          <span class="sr-only">Close menu</span>
        </button>
        {/*newFunction()*/}
        <div class="grid gap-4 sm:grid-cols-3 sm:gap-6 ">
          <div class="space-y-4 sm:col-span-2 sm:space-y-6">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <InputField fieldName="name" placeholder="Type product name"/>
            </div>
            <div>
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <div class="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                  <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                    <div class="flex items-center space-x-1 sm:pr-4">
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="sr-only">Attach file</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="sr-only">Embed map</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="sr-only">Upload image</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="sr-only">Format code</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="sr-only">Add emoji</span>
                      </button>
                    </div>
                    <div class="flex-wrap items-center hidden space-x-1 sm:flex sm:pl-4">
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="sr-only">Add list</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="sr-only">Settings</span>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-tooltip-target="tooltip-fullscreen"
                    class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
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
                        d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Full screen</span>
                  </button>
                  <div
                    id="tooltip-fullscreen"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    data-popper-reference-hidden=""
                    data-popper-escaped=""
                    data-popper-placement="bottom"
                    style={{
                      position: "absolute",
                      inset: "0px auto auto 0px",
                      margin: "0px",
                      transform: "translate3d(0px, 335px, 0px)",
                    }}
                  >
                    Show full screen
                    <div class="tooltip-arrow" data-popper-arrow=""></div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-white rounded-b-lg dark:bg-gray-800">
                  <textarea
                    id="description"
                    rows="8"
                    class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write product description here"
                    required=""
                  >
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US
                  </textarea>
                </div>
              </div>
            </div>
            <div class="mb-4">
              <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Images
              </span>
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div class="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                    alt="imac image"
                  />
                  <button
                    type="button"
                    class="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
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
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Remove image</span>
                  </button>
                </div>
                <div class="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                    alt="imac image"
                  />
                  <button
                    type="button"
                    class="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
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
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Remove image</span>
                  </button>
                </div>
                <div class="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                    alt="imac image"
                  />
                  <button
                    type="button"
                    class="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
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
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Remove image</span>
                  </button>
                </div>
                <div class="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                    alt="imac image"
                  />
                  <button
                    type="button"
                    class="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
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
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Remove image</span>
                  </button>
                </div>
              </div>
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span>
                      or drag and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="product-options"
                type="checkbox"
                value=""
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="product-options"
                class="ml-2 text-sm text-gray-500 dark:text-gray-300"
              >
                Product has multiple options, like different colors or sizes
              </label>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                datepicker=""
                id="datepicker"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"
                value="15/08/2022"
                placeholder="Select date"
              />
            </div>
          </div>
          {/*FilterOptions()*/}
        </div>
        {/*newFunction_1()*/}

        {newFunction_2()}
      </form>
    </div>
  );
}

function CreateProduct({ creating, closeFn }) {
  //ok:  flex -overflow-y-auto overflow-x-hidden fixed -top-0 -right-0 -left-0 z-50 -justify-center -items-center w-full md:inset-0 h-[calc(100%-1rem)] md:h-full h-screen max-w-3xl -p-4  -transition-transform -translate-x-full -bg-white -dark:bg-gray-800 transform-none mt-20 pb-24 -dark:bg-gray-800
  //=ok: flex -overflow-y-auto overflow-x-hidden fixed -top-0 -right-0 -left-0 z-50 -justify-center -items-center -w-full md:inset-0 h-[calc(100%-1rem)] md:h-full h-screen max-w-3xl -p-4  -transition-transform -translate-x-full -bg-white -dark:bg-gray-800 transform-none mt-20 pb-24 -dark:bg-gray-800
  //original flex -overflow-y-auto overflow-x-hidden fixed -top-0 -right-0 -left-0 z-50 -justify-center -items-center w-full md:inset-0 h-[calc(100%-1rem)] md:h-full h-screen max-w-3xl -p-4  -transition-transform -translate-x-full -bg-white -dark:bg-gray-800 transform-none mt-20 pb-24 -dark:bg-gray-800
  //margin: auto;z-index: 40;padding-top: 60px;
  const newStyles = "m-auto z-40 py-2";
  return (
    <div
      id="createProductModal"
      tabindex="-1"
      aria-hidden="true"
      class={
        `${
          creating ? "flex" : "hidden"
        } -overflow-y-auto overflow-x-hidden fixed -top-0 -right-0 -left-0 -justify-center -items-center w-full md:inset-0 h-[calc(100%-1rem)] md:h-full h-screen max-w-3xl -p-4  -transition-transform -translate-x-full -bg-white -dark:bg-gray-800 transform-none mt-20 pb-24 -dark:bg-gray-800 ` +
        newStyles
      }
    >
      <div class="relative p-4 w-full max-w-3xl h-full -md:h-auto">
        {/*<!-- Modal content -->*/}
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-5 sm:pt-5 pb-24">
          {/*<!-- Modal header -->*/}
          <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Add Product
            </h3>
            <button
              type="button"
              onClick={closeFn}
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="createProductModal"
            >
              <CloseIcon />
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          {/*<!-- Modal body -->*/}
          <form action="#">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <InputField fieldName="name" placeholder="Type product name"/>
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div>
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </label>
                <InputField fieldName="brand" placeholder="Product brand"/>
              </div>
              <div>
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <InputField type="number" fieldName="price" placeholder="$2999"/>
              </div>
              <div class="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-4">
                <div>
                  <label
                    for="weight"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Item weight (kg)
                  </label>
                  <InputField type="number" fieldName="weight" placeholder="12"/>
                </div>
                <div>
                  <label
                    for="length"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Lenght (cm)
                  </label>
                  <InputField type="number" fieldName="length" placeholder="105"/>
                </div>
                <div>
                  <label
                    for="breadth"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Breadth (cm)
                  </label>
                  <InputField type="number" fieldName="breadth" placeholder="15"/>
                </div>
                <div>
                  <label
                    for="width"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Width (cm)
                  </label>
                  <InputField type="number" fieldName="width" placeholder="23"/>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write product description here"
                ></textarea>
              </div>
            </div>
            <div class="mb-4 space-y-4 sm:flex sm:space-y-0">
              <div class="flex items-center mr-4">
                <input
                  id="inline-checkbox"
                  type="checkbox"
                  value=""
                  name="sellingType"
                  class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="inline-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  In-store only
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="inline-2-checkbox"
                  type="checkbox"
                  value=""
                  name="sellingType"
                  class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="inline-2-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Online selling only
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  checked=""
                  id="inline-checked-checkbox"
                  type="checkbox"
                  value=""
                  name="sellingType"
                  class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="inline-checked-checkbox"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Both in-store and online
                </label>
              </div>
            </div>
            <div class="mb-4">
              <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Images
              </span>
              <div class="flex justify-center items-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span>
                      or drag and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
            <div class="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <button
                type="submit"
                class="w-full sm:w-auto justify-center text-white inline-flex bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Add product
              </button>
              <button class="w-full sm:w-auto text-white justify-center inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <svg
                  class="mr-1 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Schedule
              </button>
              <button
                onClick={closeFn}
                data-modal-toggle="createProductModal"
                type="button"
                class="w-full justify-center sm:w-auto text-gray-500 inline-flex items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                <svg
                  class="mr-1 -ml-1 w-5 h-5"
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
                Discard
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function ViewProduct({ viewing, closeFn }) {
  //"overflow-y-auto fixed top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform dark:bg-gray-800
  //-translate-x-full"
  //tabindex="-1" aria-labelledby="drawer-label" aria-hidden="true">
  //"overflow-y-auto fixed top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform dark:bg-gray-800
  // transform-none" tabindex="-1" aria-labelledby="drawer-label" aria-modal="true" role="dialog"></div>
  //class={`overflow-y-auto ${viewing? 'fixed' : 'flex'} top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform ${viewing ? 'transform-none' : '-translate-x-full' } dark:bg-gray-800`} tabindex="-1" aria-labelledby="drawer-label" aria-hidden="true"
  return (
    <div
      id="drawer-read-product-advanced"
      class={`overflow-y-auto fixed top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform ${
        viewing ? "transform-none" : "-translate-x-full"
      } dark:bg-gray-800 mt-20 pb-20`}
      tabindex="-1"
      aria-labelledby="drawer-label"
      aria-hidden="true"
    >
      <div>
        <h4
          id="read-drawer-label"
          class="mb-1.5 leading-none text-xl font-semibold text-gray-900 dark:text-white"
        >
          Apple iMac 25"
        </h4>
        <h5 class="mb-5 text-xl font-bold text-gray-900 dark:text-white">
          $2999
        </h5>
      </div>
      <button
        onClick={closeFn}
        type="button"
        data-drawer-dismiss="drawer-read-product-advanced"
        aria-controls="drawer-read-product-advanced"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <CloseIcon />
        <span class="sr-only">Close menu</span>
      </button>
      <div class="grid grid-cols-3 gap-4 mb-4 sm:mb-5">
        <div class="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
            alt="iMac Side Image"
          />
        </div>
        <div class="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
            alt="iMac Front Image"
          />
        </div>
        <div class="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
            alt="iMac Back Image"
          />
        </div>
        <div class="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
            alt="iMac Back Image"
          />
        </div>
        <div class="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
            alt="iMac Front Image"
          />
        </div>
        <div class="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
            alt="iMac Side Image"
          />
        </div>
      </div>
      <dl class="sm:mb-5">
        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
          Details
        </dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
          Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor,
          Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT
          with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic
          Mouse 2, Magic Keyboard - US.
        </dd>
      </dl>
      <dl class="grid grid-cols-2 gap-4 mb-4">
        <div class="col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 sm:col-span-1 dark:border-gray-600">
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Shipping
          </dt>
          <dd class="flex items-center text-gray-500 dark:text-gray-400">
            <svg
              class="w-4 h-4 mr-1.5"
              aria-hidden="true"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            United States, Europe
          </dd>
        </div>
        <div class="col-span-2 p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 sm:col-span-1 dark:border-gray-600">
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Colors
          </dt>
          <dd class="flex items-center space-x-2 font-light text-gray-500 dark:text-gray-400">
            <div class="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full"></div>
            <div class="flex-shrink-0 w-6 h-6 bg-indigo-400 rounded-full"></div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600"></div>
            <div class="flex-shrink-0 w-6 h-6 bg-pink-400 rounded-full"></div>
            <div class="flex-shrink-0 w-6 h-6 bg-teal-300 rounded-full"></div>
            <div class="flex-shrink-0 w-6 h-6 bg-green-300 rounded-full"></div>
          </dd>
        </div>
        <div class="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Product State
          </dt>
          <dd class="text-gray-500 dark:text-gray-400">
            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                aria-hidden="true"
                class="mr-1 w-3 h-3"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              New
            </span>
          </dd>
        </div>
        <div class="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Sold by
          </dt>
          <dd class="text-gray-500 dark:text-gray-400">Flowbite</dd>
        </div>
        <div class="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Ships from
          </dt>
          <dd class="text-gray-500 dark:text-gray-400">Flowbite</dd>
        </div>
        <div class="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Brand
          </dt>
          <dd class="text-gray-500 dark:text-gray-400">Apple</dd>
        </div>
        <div class="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Dimensions (cm)
          </dt>
          <dd class="text-gray-500 dark:text-gray-400">105 x 15 x 23</dd>
        </div>
        <div class="p-3 bg-gray-100 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
            Item weight
          </dt>
          <dd class="text-gray-500 dark:text-gray-400">12kg</dd>
        </div>
      </dl>
      <div class="flex bottom-0 left-0 justify-center pb-4 space-x-4 w-full">
        <button
          type="button"
          class="text-white w-full inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            aria-hidden="true"
            class="mr-1 -ml-1 w-5 h-5"
            fill="currentColor"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>
          Edit
        </button>
        <button
          type="button"
          class="inline-flex w-full items-center text-white justify-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 mr-1.5 -ml-1"
            fill="currentColor"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
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
  );
}

function InputField({type,fieldName,placeholder,value,required}){
    return <input
        type={type||'text'}
        name={fieldName}
        id={fieldName}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholder || ''}
        required={required || ""}
        value={value||""}
    />
}

function Checkbox({fieldName,value,fieldLabel}){
    return <><input
            id={fieldName}
            type="checkbox"
            value={value||""}
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label for={fieldName} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            {fieldLabel||""}
            </label>
            </>;
}