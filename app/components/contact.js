'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { domine } from '../styles/fonts';
import { malitoChange } from '../utils/malito-change';
import { fields } from '../constants/date-malito';
import { useCreateHandleBlur } from '../../hooks/use-handle-blur';

// Use React.lazy to lazily load the Inputs component
const LazyInputs = React.lazy(() => import('./contact/inputs'));

const Header = ({ title }) => (
  <h4
    className={`text-xl my-2 ml-4 md:text-[28px] md:ml-10 font-extralight text-custom-blue
    text-cente sm:text-[22px] ${domine.className}`}
  >
    {title}
  </h4>
);

const FormWrapper = ({ children }) => (
  <div className="items-center flex flex-col h-5/6 w-full sm:w-4/5 md:w-3/4 xl:w-1/2" >
    {children}
  </div>
);

const SubHeader = ({ title }) => (
  <h6 className={`bg-slate-900 rounded-xl shadow-customShadow text-xl sm:text-2xl
    p-3 text-center w-auto left-auto absolute top-auto ${domine.className}`} >
    {title}
  </h6>
);

// Handle input change
const handleChange = (event, setFormState) => {
  const { name, value } = event.target;
  setFormState((previousState) => ({
    ...previousState,
    data: {
      ...previousState.data,
      [name]: value,
    },
  }));
};

const SubmitButton = ({ isDisabled }) => (
  <a href="mailto:jose.leandro.nasciment@gmail.com">
    <button
      className="py-2 px-10 sm:px-16 border-none bg-slate-800 rounded-md"
      disabled={isDisabled}
      type="submit"
    >   
      Enviar
    </button>
  </a>
);

// Handle form submission
const handleSubmit = (event, isFormValid) => {
  event.preventDefault();
  isFormValid
    ? console.log('Form submitted!', formState.data)
    : console.warn('Form is invalid!');
};


const addBlurListeners = (references, blurHandler) => {
  Object.values(references.current).forEach((reference) => reference?.addEventListener('blur', blurHandler));
};

/**
 * Contato é um componente React que configura
 * o formulário de contato e sua validação.
 * @returns {React.ReactElement} O componente de
 * formulário de contato renderizado.
 */
export default function Contact() {
  const [formState, setFormState] = useState({ data: { assunto: '', mensagem: '', nome: '' }, validity: { assunto: false, mensagem: false, nome: false } });
  const [isFormValid, setIsFormValid] = useState(false);
  const references = useRef({});
  const handleBlur = useCreateHandleBlur(setFormState, setIsFormValid);
  useEffect(() => {
    addBlurListeners(references, handleBlur);
    malitoChange(formState.data);
  }, [handleBlur, formState.data]);

  return (
    <section className="py-10 w-full flex flex-col justify-evenly items-center">
      <Header title="Contato" />
      <form className="items-center flex h-auto justify-evenly w-full" onSubmit={(event) => handleSubmit(event, isFormValid)} >
        <FormWrapper>
          <SubHeader title="Entre em contato" />
          <div className="bg-transparent border-[1.5px] w-11/12 border-solid border-slate-700 rounded-xl h-auto mt-4 ml-2 py-5 px-10 flex flex-col items-center" >

            {/* Lazy load the Inputs component */}
            <Suspense fallback={<div>Loading...</div>}>
            <LazyInputs fields={fields} formState={formState} references={references} handleChange={(event) => handleChange(event, setFormState)} handleBlur={handleBlur} />
            </Suspense>

            <SubmitButton isDisabled={!isFormValid} />
          </div>
        </FormWrapper>
      </form>
    </section>
  );
}
