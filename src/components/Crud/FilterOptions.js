import React, { useState } from "react";
import { ArrowUpIcon } from "./Icons";
import { Checkbox, SelectField, ShippingOption,Rating  } from "./PageComponents";




export function FilterOptions() {
  const [displayCategory, setDisplayCategory] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(false);
  const [displayWorldWideShipping, setDisplayWorldWideShipping] = useState(false);
  const [displayRating, setDisplayRating] = useState(false);
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
                clip-rule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-search"
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Search keywords..." />
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
            onClick={e => setDisplayCategory(!displayCategory)}
            type="button"
            class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            data-accordion-target="#category-body"
            aria-expanded="true"
            aria-controls="category-body"
          >
            <span>Category</span>
            {ArrowUpIcon()}
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
                <Checkbox fieldLabel="Apple (56)" fieldName="apple" />
              </li>
              <li class="flex items-center">
                <Checkbox fieldLabel="Microsoft (45)" fieldName="microsoft" />
              </li>
              <li class="flex items-center">
                <Checkbox fieldLabel="Logitech (97)" fieldName="logitech" />
              </li>
              <li class="flex items-center">
                <Checkbox fieldLabel="Sony (234)" fieldName="sony" />
              </li>
              <li class="flex items-center">
                <Checkbox fieldLabel="Asus (97)" fieldName="asus" />
              </li>
              <li class="flex items-center">
                <Checkbox fieldLabel="Dell (56)" fieldName="dell" />
              </li>
              <li class="flex items-center">
                <Checkbox fieldLabel="MSI (97)" fieldName="msi" />
              </li>
              <li class="flex items-center">
                <Checkbox fieldLabel="Canon (49)" fieldName="canon" />
              </li>
              <li class="flex items-center">
                <Checkbox fieldLabel="BenQ (23)" fieldName="benq" />
              </li>
              <li class="flex items-center">
                <Checkbox fieldLabel="Razor (49)" fieldName="razor" />
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
            onClick={e => setDisplayPrice(!displayPrice)}
            type="button"
            class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            data-accordion-target="#price-body"
            aria-expanded="true"
            aria-controls="price-body"
          >
            <span>Price</span>
            {ArrowUpIcon()}
          </button>
        </h2>
        <div id="price-body" class={displayPrice ? '' : 'hidden'} aria-labelledby="price-heading">
          <div class="flex items-center py-2 space-x-3 font-light border-b border-gray-200 dark:border-gray-600">

            <SelectField
              options={[{ label: "$500", },
              { label: "$2500", },
              { label: "$5000", },]}
              defaultOptionLabel="From"
              fieldName="price-from" />
            <SelectField
              options={[{ label: "$500", },
              { label: "$2500", },
              { label: "$5000", },]}
              defaultOptionLabel="To"
              fieldName="price-to" />
          </div>
        </div>
        {/*<!-- Worldwide Shipping -->*/}
        <h2 id="worldwide-shipping-heading">
          <button
            onClick={e => setDisplayWorldWideShipping(!displayWorldWideShipping)}
            type="button"
            class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            data-accordion-target="#worldwide-shipping-body"
            aria-expanded="true"
            aria-controls="worldwide-shipping-body"
          >
            <span>Worldwide Shipping</span>
            {ArrowUpIcon()}
          </button>
        </h2>
        <div
          id="worldwide-shipping-body"
          class={displayWorldWideShipping ? '' : 'hidden'}
          aria-labelledby="worldwide-shipping-heading"
        >
          <div class="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
            <ShippingOption destination="North America" />
            <ShippingOption destination="South America" />
            <ShippingOption destination="Asia" />
            <ShippingOption destination="Australia" />
            <ShippingOption destination="Europe" />



          </div>
        </div>
        {/*<!-- Rating -->*/}
        <h2 id="rating-heading">
          <button
            onClick={e => setDisplayRating(!displayRating)}
            type="button"
            class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            data-accordion-target="#rating-body"
            aria-expanded="true"
            aria-controls="rating-body"
          >
            <span>Rating</span>
            {ArrowUpIcon()}
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
                class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
