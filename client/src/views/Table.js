/*eslint-disable*/
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const products =[{
                    name:'Apple MacBook Pro 17"',
                    color:"White",
                    category:"Laptop PC",
                    price:" $1999",
                    action:"Edit",
                },{
                  name:"Microsoft Surface Pro",
                  color:"White",
                  category:"Laptop PC",
                  price:" $1999",
                  action:"Edit",
                }
                ,{
                  name:"Magic Mouse 2",
                  color:"Black",
                  category:"Accessories",
                  price:" $99",
                  action:"Edit",
                }
                ,{
                  name:"Apple Watch",
                  color:"Black",
                  category:"Watches",
                  price:" $199",
                  action:"Edit",
                }
                ,{
                  name:" Apple iMac",
                  color:"Silver",
                  category:"PC",
                  price:" $2999",
                  action:"Edit",
                }
                ,{
                  name:"Apple AirPods",
                  color:"White",
                  category:"Accessories",
                  price:" $399",
                  action:"Edit",
                }
                ,{
                  name:"iPad Pro",
                  color:"Gold",
                  category:"Tablet",
                  price:" $699",
                  action:"Edit",
                }
                ,{
                  name:"Magic Keyboard",
                  color:"Black",
                  category:"Accessories",
                  price:"$99",
                  action:"Edit",
                }
                ,{
                  name:"Smart Folio iPad Air",
                  color:"Blue",
                  category:"Accessories",
                  price:"$79",
                  action:"Edit",
                }
                ,{
                  name:"AirTag",
                  color:"Silver",
                  category:"Accessories",
                  price:"$29",
                  action:"Edit",
                }
                ];

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      {<section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <Section2/>
      </section>}
      <Footer />
    </>
  );
}

const Sub1 = <div
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
</div>;

const Sub2 = <div className="container mx-auto">
    <div className="flex flex-wrap items-center">
      <div className="w-10/12  px-12 md:px-4 mr-auto ml-auto mt-2 ">

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {products.map(p=>
              <Row
              name={p.name}
              color={p.color}
              category={p.category}
              price={p.price}
              action={p.action}
              ></Row>)}
          
        </tbody>
    </table>
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
</div>
        </div>
    </div>
  <div className="flex flex-wrap items-center">
  </div>
</div>;



function Row({name,color,category,price,action}) {
  return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="w-4 p-4">
      <div class="flex items-center">
        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
      </div>
    </td>
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {name}
    </th>
    <td class="px-6 py-4">
      {color}
    </td>
    <td class="px-6 py-4">
      {category}
    </td>
    <td class="px-6 py-4">
      {price}
    </td>
    <td class="px-6 py-4">
      <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{action}</a>
    </td>
  </tr>;
}

function Section2() {
  return <>
    {Sub1}
    {Sub2}
  </>;
}

