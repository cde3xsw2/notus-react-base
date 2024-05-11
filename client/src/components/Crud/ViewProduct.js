import React from "react";
import { CloseIcon, ShippingIcon, ProductStateIcon, EditIcon2, DeleteIcon2 } from "components/Crud/Icons";

export function ViewProduct({ viewing, closeFn }) {
  //"overflow-y-auto fixed top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform dark:bg-gray-800
  //-translate-x-full"
  //tabindex="-1" aria-labelledby="drawer-label" aria-hidden="true">
  //"overflow-y-auto fixed top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform dark:bg-gray-800
  // transform-none" tabindex="-1" aria-labelledby="drawer-label" aria-modal="true" role="dialog"></div>
  //class={`overflow-y-auto ${viewing? 'fixed' : 'flex'} top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform ${viewing ? 'transform-none' : '-translate-x-full' } dark:bg-gray-800`} tabindex="-1" aria-labelledby="drawer-label" aria-hidden="true"
  return (
    <div
      id="drawer-read-product-advanced"
      class={`overflow-y-auto fixed top-0 left-0 z-40 p-4 w-full max-w-lg h-screen bg-white transition-transform ${viewing ? "transform-none" : "-translate-x-full"} dark:bg-gray-800 mt-20 pb-20`}
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
        {[{ image: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" },
        { image: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" },
        { image: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png", },
        { image: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" },
        { image: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" },
        { image: "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" }]
          .map(e => <div class="p-2 w-auto bg-gray-100 rounded-lg dark:bg-gray-700">
            <img
              src={e.image}
              alt="iMac Front Image" />
          </div>)}

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
            {ShippingIcon()}
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
              {ProductStateIcon()}
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
          {EditIcon2()}
          Edit
        </button>
        <button
          type="button"
          class="inline-flex w-full items-center text-white justify-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          {DeleteIcon2()}
          Delete
        </button>
      </div>
    </div>
  );
}
