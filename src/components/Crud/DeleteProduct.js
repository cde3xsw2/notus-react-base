import { CloseIcon,WarningIcon } from "./Icons";

export function DeleteProduct({ deleting, closeFn }){

    {/*<!-- Delete Modal -->*/}
    //{`${creating ? "flex" : "hidden"} -overflow-y-auto overflow-x-hidden fixed -top-0 -right-0 -left-0 -justify-center -items-center w-full md:inset-0 h-[calc(100%-1rem)] md:h-full h-screen max-w-3xl -p-4  -transition-transform -translate-x-full -bg-white -dark:bg-gray-800 transform-none mt-20 pb-24 -dark:bg-gray-800 ` +
    //hidden:fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center hidden
    //shown: fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex
    return <div
      id="delete-modal"
      tabindex="-1"
      class={`fixed top-0 left-0 right-0 z-50 ${deleting ?'flex' :'hidden' } p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center flex`}
    >
      <div class="relative w-full h-auto max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={closeFn}
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="delete-modal"
          >
            <CloseIcon/>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <WarningIcon/>
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
              onClick={closeFn}
              data-modal-toggle="delete-modal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>;
}