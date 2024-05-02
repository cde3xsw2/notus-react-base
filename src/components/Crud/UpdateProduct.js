import React from "react";
import { CloseIcon } from "components/Crud/Icons";
import { InputField, SelectField } from "components/Crud/PageComponents";
import {DateIcon,UploadImagenIcon2,RemoveImageIcon,FullScreenIcon,SettingsIcon,AddListIcon,AddEmojiIcon,FormatCodeIcon,UploadImageIcon,EmbedMapIcon,AttachFileIcon,SettingsIcon2,DeleteIcon_2} from "components/Crud/Icons";


export function newFunction_2() {
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
        {DeleteIcon_2}
        Delete
      </button>
    </div>
  );
}

export function UpdateProduct({ editing, closeFn }) {
  return (
    <div className=" ">
      {" "}
      {/**pt-28 */}
      <form
        action="#"
        id="drawer-update-product"
        class={`fixed top-0 left-0 z-40 w-full h-screen max-w-3xl p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800 ${editing ? "transform-none mt-20 pb-24" : "-translate-x-full"} dark:bg-gray-800`}
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
        <div class="grid gap-4 sm:grid-cols-3 sm:gap-6 ">
          <div class="space-y-4 sm:col-span-2 sm:space-y-6">
            <InputField fieldName="name" placeholder="Type product name" labelDesc="Product Name" />
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
                        {AttachFileIcon}
                        <span class="sr-only">Attach file</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        {EmbedMapIcon}
                        <span class="sr-only">Embed map</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        {UploadImageIcon}
                        <span class="sr-only">Upload image</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        {FormatCodeIcon}
                        <span class="sr-only">Format code</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        {AddEmojiIcon}
                        <span class="sr-only">Add emoji</span>
                      </button>
                    </div>
                    <div class="flex-wrap items-center hidden space-x-1 sm:flex sm:pl-4">
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        {AddListIcon}
                        <span class="sr-only">Add list</span>
                      </button>
                      <button
                        type="button"
                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        {SettingsIcon2}
                        <span class="sr-only">Settings</span>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-tooltip-target="tooltip-fullscreen"
                    class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    {FullScreenIcon}
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
                    alt="imac image" />
                  <button
                    type="button"
                    class="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
                  >
                    {RemoveImageIcon}
                    <span class="sr-only">Remove image</span>
                  </button>
                </div>
                <div class="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                    alt="imac image" />
                  <button
                    type="button"
                    class="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
                  >
                    {RemoveImageIcon}
                    <span class="sr-only">Remove image</span>
                  </button>
                </div>
                <div class="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                    alt="imac image" />
                  <button
                    type="button"
                    class="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
                  >
                    {RemoveImageIcon}
                    <span class="sr-only">Remove image</span>
                  </button>
                </div>
                <div class="relative p-2 bg-gray-100 rounded-lg sm:w-36 sm:h-36 dark:bg-gray-700">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                    alt="imac image" />
                  <button
                    type="button"
                    class="absolute text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 bottom-1 left-1"
                  >
                    {RemoveImageIcon}
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
                    {UploadImagenIcon2}
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
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label
                for="product-options"
                class="ml-2 text-sm text-gray-500 dark:text-gray-300"
              >
                Product has multiple options, like different colors or sizes
              </label>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {DateIcon}
              </div>
              <input
                datepicker=""
                id="datepicker"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"
                value="15/08/2022"
                placeholder="Select date" />
            </div>
          </div>
          <div class="space-y-4 sm:space-y-6">

            <InputField
              fieldName="product-brand"
              value="Apple"
              labelDesc="Brand"
              placeholder="Product Brand" />

            <SelectField
              options={[
                { selected: "", label: "Electronics", },
                { value: "TV", label: "TV/Monitors", },
                { value: "PC", label: "PC", },
                { value: "GA", label: "Gaming/Console", },
                { value: "PH", label: "Phones", },
              ]}
              fieldName="category"
              defaultOptionLabel="Electronics"
              labelDesc={"Category"} />
            <InputField type="number" fieldName="item-weight" placeholder="Ex. 12" value="12" />
            <InputField type="lenght" fieldName="lenght" placeholder="Ex. 105" value="105" labelDesc="Length (cm)" />
            <InputField type="number" fieldName="breadth" placeholder="Ex. 15" value="15" labelDesc="Breadth (cm)" />
            <InputField type="number" fieldName="width" placeholder="Ex. 23" value="23" labelDesc="Width (cm)" />
          </div>
          {/*FilterOptions()*/}
        </div>

        {/*newFunction_1()*/}

        {newFunction_2()}
      </form>
    </div>
  );
}
