
import {YellowStar,WhiteStar} from './Icons'



function FieldWithLabelWrapper({labelDesc,children,fieldName,className}){
    return <div class={className}>
      <label
        for={fieldName}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelDesc}
      </label>
      {children}
    </div>
  }

export function ShippingOption({destination}){
    return <label class="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        name="shipping"
      />
      <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {destination}
      </span>
    </label>
  }



export function InputField({type,fieldName,placeholder,value,required,className,labelDesc}){
    return <FieldWithLabelWrapper className={className} labelDesc={labelDesc} fieldName={fieldName}>
        <input
          type={type||'text'}
          name={fieldName}
          id={fieldName}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder={placeholder || ''}
          required={required || ""}
          value={value||""}
      />
    </FieldWithLabelWrapper>
}

export function Checkbox({fieldName,value,fieldLabel}){
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


export function SelectField({fieldName,options,defaultOptionLabel,className,labelDesc}){
  return <FieldWithLabelWrapper className={className} labelDesc={labelDesc} fieldName={fieldName}>
    <select
    id={fieldName}
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
  >
    <option selected="">{defaultOptionLabel || 'Select category'}</option>
    {options && options.map(o=><option value={o.value||o.label}>{o.label}</option>)}
  </select>
  </FieldWithLabelWrapper>
}

export const Rating = ({ rating }) => {
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
  