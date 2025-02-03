import React, { useCallback, useMemo } from "react";
import { domine } from "../../styles/fonts";

/**
 * InputField Component: Represents a single input field with its label.
 */
const InputField = React.memo(function InputField({
    field, value, reference, onChange, onBlur
  }) {
    return (
      <div className="flex flex-col h-auto my-3 w-11/12">
        <label
          htmlFor={field.name}
          id={field.name}
          className={`${domine.className || ""}`}
        >
          {field.label}
        </label>
        <input
          type={field.type || "text"}
          name={field.name}
          ref={(el) => (reference.current[field.name] = el)}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-label={field.name}
          data-tipo={field.name}
          pattern={field.pattern}
          className="bg-transparent border-b-[1.5px] h-8 mb-2 ml-3 w-auto border-solid
                     text-base focus:outline-none focus:px-0 py-1 focus:w-[41px] 
                     placeholder:text-slate-500"
          placeholder={field.placeholder}
          required={field.required || false}
          title={field.title || ""}
        />
      </div>
    );
  });
  

/**
 * Inputs Component: Renders a list of input fields based on the provided configuration.
 */
export default function Inputs({ fields, formState, references, handleChange, handleBlur }) {
    const memoizedFields = useMemo(() => fields, [fields]);
    const memoizedFormState = useMemo(() => formState, [formState]);

    const memoizedHandleChange = useCallback((event) => {
      handleChange(event);
    }, [handleChange]);
  
    const memoizedHandleBlur = useCallback((event) => {
      handleBlur(event);
    }, [handleBlur]);
  
    return (
      <>
        {memoizedFields.map((field) => (
          <InputField
            key={field.name}
            field={field}
            value={memoizedFormState.data[field.name]}
            reference={references}
            onChange={memoizedHandleChange}
            onBlur={memoizedHandleBlur}
          />
        ))}
      </>
    );
  }