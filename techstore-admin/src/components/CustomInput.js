import React from "react";

const CustomInput = (props) => {
  const { type, label, i_id, i_class, name, val, onChng, onBlr } = props;
  return (
    <div className="relative mt-3">
    
    <input 
      type={type}
      id={i_id}
      name={name}
      value={val}
      onChange={onChng}
      onBlur={onBlr}
      className={`w-full h-10 border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors peer rounded-md`} 
      autocomplete="off" 
    />
    {
      val ? ( <label htmlFor={i_id} className="absolute left-0 top-[-16px] text-blue-600 text-xs ">
                <div className=" ml-2">{label}</div>  
              </label>) : 
            (
            <label htmlFor={i_id} className="absolute left-0 top-2 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-600 transition-all ">
              <div className=" ml-2">{label}</div>
            </label>
            )

    }
    

    </div>
  );
};

export default CustomInput;