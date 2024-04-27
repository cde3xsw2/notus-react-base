/*eslint-disable*/
import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import * as yup from "yup"
import PropTypes from 'prop-types'; 


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

  const schema = yup.object({//.shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    // Add more fields and validation rules as needed
  }).required();


  const LoadingIcon = ()=><svg aria-hidden="true" class="w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mr-3 inline" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>;

  function SubmitButton({fieldLabel,disabled}) {
    const classWhenFocused = `text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;
    const classWhenNotFocused = `text-white bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`;
    return <button 
            type="submit" 
            className={`${disabled?classWhenNotFocused:classWhenFocused} focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  `}
            disabled={disabled}
            > {disabled && <LoadingIcon/>}    {fieldLabel}</button>;
  }

  InputField.propTypes = {
    fieldName:PropTypes.string.isRequired,
    fieldLabel: PropTypes.string.isRequired,
  }
  function InputField({fieldName,fieldLabel,placeholder,error,register,readOnly=false}) {
    return <div className="relative z-0 w-full mb-5 group">
      <input 
        type="text" 
        name={fieldName} 
        id={fieldName} 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder={placeholder || ''}
        {...register}
        readOnly={readOnly}
        />
      {<label 
        htmlFor={fieldName} 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          {fieldLabel}
      </label>}
      <div>
        {error  && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error?.message}</p>}
      </div>
    </div>;
  }
function Form2(){
  //shouldFocusError: false,//React Hook Form re-renders the form component when there's a validation error, which can cause the input field to lose focus.
  //reValidateMode:"onBlur"
  const { register, 
          handleSubmit, 
          getValues,       
          formState: { errors,
                      isDirty,
                      isLoading,
                      isSubmitted,
                      isSubmitting,
                      isValidating,
                    isValid } } = useForm({resolver: yupResolver(schema),});
    

  const onSubmit = (data) => {
    return new Promise(resolve=>{
      setTimeout(e=>{
        //https://jasonwatmore.com/post/2021/09/12/react-hook-form-submitting-loading-spinner-example
        console.log('completed');
        resolve()
      },2000)
    })
    
  };
  return (<div className="">
    <div>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mb-4 ">
            <legend className="font-medium text-base text-gray-700">Contact Information</legend>
            <InputField 
              fieldName={'email'} 
              fieldLabel={'E-mail'} 
              error={errors['email']} 
              register={register('email')}
              readOnly={isSubmitting}
            />
            <InputField 
              fieldName={'name'} 
              fieldLabel={'Name'} 
              error={errors['name']} 
              register={register('name')}
              readOnly={isSubmitting}/>
            <div className="grid md:grid-cols-2 md:gap-6">
              <InputField 
                fieldName={'firstName'} 
                fieldLabel={'First Name'} 
                error={errors['firstName']} 
                register={register('firstName')}
                readOnly={isSubmitting}/>
              <InputField 
                fieldName={'lastName'} 
                fieldLabel={'Last Name'} 
                error={errors['lastName']} 
                register={register('lastName')}
                readOnly={isSubmitting}/>
            </div>
            <SubmitButton fieldLabel={'Submit'} disabled={isSubmitting}/>
          </form>
          </div>

          <div className=" bg-slate-200 h-4"></div>
          <div className="max-w-md mx-auto bg-yellow-200 justify-center  items-center">
            <pre>
              {JSON.stringify({...getValues(),},null,4)}
            </pre>
            <pre>
              {JSON.stringify({isValid,isDirty,isLoading,isSubmitted,isSubmitting,isValidating},null,4)}
            </pre>
          </div>
          </div>);
}
const Form3 = ()=><form>
<fieldset className="border p-4 rounded-md">
  <legend className="font-medium text-base text-gray-700">Contact Information</legend>
  <div className="mb-4">
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
    <input type="text" id="name" name="name" className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
    <input type="email" id="email" name="email" className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
  </div>
  </fieldset>
<button type="submit" className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Submit
</button>
</form>

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
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-neutral-50 pt-4">
          <Form2></Form2>
        </div>
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-neutral-50 pt-4">
          <Form3></Form3>
        </div>
        </div>
    </div>
  <div className="flex flex-wrap items-center">
  </div>
</div>;



function Section2() {
  return <>
    {Sub1}
    {Sub2}
  </>;
}

