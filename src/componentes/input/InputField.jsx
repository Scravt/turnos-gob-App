import React from 'react'

const InputField = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
}) => {
    return (
        <div className="mb-5 flex flex-col">
            <label htmlFor={name} className="text-medium mb-1">
                {label}
            </label>
            <input
                className={`border text-black bg-white border-gray-300 border-solid rounded-md p-2 text-base text-start ${error ? "border-red-500" : ""
                    }`}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error ? <div className="text-red-500 mt-1">{error}</div> : null}
        </div>
    )
}

export default InputField