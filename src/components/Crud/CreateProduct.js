import React from "react";
import { CloseIcon, UploadIcon } from "components/Crud/Icons";
import { InputField, SelectField } from "components/Crud/PageComponents";

export function CreateProduct({ creating, closeFn }) {
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
      class={`${creating ? "flex" : "hidden"} -overflow-y-auto overflow-x-hidden fixed -top-0 -right-0 -left-0 -justify-center -items-center w-full md:inset-0 h-[calc(100%-1rem)] md:h-full h-screen max-w-3xl -p-4  -transition-transform -translate-x-full -bg-white -dark:bg-gray-800 transform-none mt-20 pb-24 -dark:bg-gray-800 ` +
        newStyles}
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
              <InputField fieldName="name" placeholder="Type product name" labelDesc="Product Name" />
              <SelectField
                options={[
                  { value: "TV", label: "TV/Monitors", },
                  { value: "PC", label: "PC", },
                  { value: "GA", label: "Gaming/Console", },
                  { value: "PH", label: "Phones", },
                ]}
                fieldName="category"
                defaultOptionLabel="Select category"
                labelDesc="Category" />

              <InputField fieldName="brand" placeholder="Product brand" labelDesc="Brand" />


              <InputField type="number" fieldName="price" placeholder="$2999" labelDesc="Price" />
              <InputField type="number" fieldName="weight" placeholder="12" labelDesc="Item weight (kg)" />
              <InputField type="number" fieldName="length" placeholder="105" labelDesc="Length (cm)" />
              <InputField type="number" fieldName="breadth" placeholder="15" labelDesc="Breadth (cm)" />
              <InputField type="number" fieldName="width" placeholder="23" labelDesc="Width (cm)" />
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
                  class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                  class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                  class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                    {UploadIcon()}
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
                    clip-rule="evenodd" />
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
                    clip-rule="evenodd" />
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
