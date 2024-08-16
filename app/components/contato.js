'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Domine } from 'next/font/google';
import { toast } from 'sonner';

// eslint-disable-next-line new-cap
const domine = Domine({
  subsets: ['latin'],
  weight: '500',
});

/**
 * Contato é um componente React que configura
 * o formulário de contato e sua validação.
 * @return {React.ReactElement} O componente de
 * formulário de contato renderizado.
 */
export default function Contato() {
  const [formData, setFormData] = useState({
    assunto: '',
    mensagem: '',
    nome: '',
  });
  const [formValidity, setFormValidity] = useState({
    assunto: false,
    mensagem: false,
    nome: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const refAssunto = useRef(null);
  const refMensagem = useRef(null);
  const refNome = useRef(null);
  const refForm = useRef(null);

  /**
   * Manipula o evento blur para validar o campo de entrada.
   * @param {Event} event - O evento blur.
   */
  const handleBlur = useCallback(
    (event) => {
      const tiposDeErro = [
        'valueMissing',
        'typeMismatch',
        'patternMismatch',
        'customError',
      ];

      const mensagensDeErro = {
        nome: {
          valueMissing:
            'Por favor, preencha o campo nome. Este campo não pode ficar em branco.',
          typeMismatch:
            'O nome inserido não parece ser válido. Por favor, tente novamente.',
          patternMismatch:
            'O nome inserido não segue o formato esperado. Por favor, tente novamente.',
        },
        assunto: {
          valueMissing:
            'Por favor, preencha o campo de assunto. Este não pode ficar em branco.',
          typeMismatch:
            'O assunto inserido não parece ser válido. Por favor, tente novamente.',
          patternMismatch:
            'O assunto inserido não segue o formato esperado. Por favor, tente novamente.',
        },
        mensagem: {
          valueMissing:
            'Por favor, preencha o campo de mensagem. Este não pode ficar em branco.',
          typeMismatch:
            'A mensagem inserida não parece ser válida. Por favor, tente novamente.',
          patternMismatch:
            'A mensagem inserida não segue o formato esperado. Por favor, tente novamente.',
        },
      };

      const mostraMensagemDeErro = (tipoDeInput, input) => {
        let mensagem = '';
        tiposDeErro.forEach((erro) => {
          if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
          }
        });
        return mensagem;
      };

      const valida = (target) => {
        const tipoDeInput = inputAlvo.dataset.tipo;
        if (inputAlvo.validity.valid) {
          const spanElement = inputAlvo.parentNode.querySelector('.error-span');
          if (spanElement) {
            spanElement.remove();
          }
          setFormValidity((prevState) => ({
            ...prevState,
            [tipoDeInput]: true,
          }));
        } else {
          const spanErro = document.createElement('span');
          const existingSpan =
            inputAlvo.parentNode.querySelector('.error-span');
          if (existingSpan) {
            existingSpan.innerHTML = mostraMensagemDeErro(
              tipoDeInput,
              inputAlvo,
            );
            return;
          }
          spanErro.classList.add('error-span');
          spanErro.innerHTML = mostraMensagemDeErro(tipoDeInput, inputAlvo);
          inputAlvo.parentNode.insertBefore(spanErro, inputAlvo.nextSibling);
          spanErro.classList.add('text-red-800');
          setFormValidity((prevState) => ({
            ...prevState,
            [tipoDeInput]: false,
          }));
        }
        setIsFormValid(Object.values(formValidity).every(Boolean));
      };
      valida(event.target);
    },
    [formValidity],
  );

  useEffect(() => {
    const refs = [refAssunto, refMensagem, refNome];
    refs.forEach((ref) => {
      const tipoInput = ref.current;
      if (tipoInput) {
        tipoInput.addEventListener('blur', handleBlur);
      } else {
        console.warn(`Reference not set for ${ref}`);
      }
    });

    // Limpagem dos ouvintes de eventos na desmontagem do componente
    return () => {
      refs.forEach((ref) => {
        const tipoInput = ref.current;
        if (tipoInput) {
          tipoInput.removeEventListener('blur', handleBlur);
        }
      });
    };
  }, [handleBlur]);

  /**
   * Exibe uma mensagem de notificação de sucesso.
   */
  const notificacoesMensagem = () => {
    toast.success('Obrigado por entrar em contato!', {
      description:
        'Aguardo sua escolha do provedor para processar sua mensagem. A partir disso, você terá a liberdade de selecionar o provedor de envio que mais lhe agrada.',
      closeButton: true,
      onAutoClose: false,
      unstyled: true,
      classNames: {
        toast: 'bg-slate-700 px-9 py-3 w-auto flex flex-col items-center',
        title: 'px-2',
        description: 'mt-2',
        closeButton: '',
      },
    });
  };

  useEffect(() => {
    if (refForm.current) {
      refForm.current.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Add custom logic here
        console.log('Form submission prevented!');
      });
    }
  }, []);

  /**
   * Atualiza o link mailto com a entrada do usuário.
   */
  const alteracaoDadosMailto = () => {
    const { mensagem, nome, assunto } = formData;

    const palavrasSudacoes = [
      'Olá, bom dia',
      'Boa noite',
      'Bom dia',
      'Olá',
      'Olá, tudo bem',
      'Tudo bem',
      'Boa tarde',
    ];
    let corpoEmail = '';

    for (let i = 0; i < palavrasSudacoes.length; i++) {
      if (mensagem.includes(palavrasSudacoes[i])) {
        const novoTexto = mensagem.replace(palavrasSudacoes[i], '');
        corpoEmail = `${palavrasSudacoes[i]}, Meu Nome é ${nome}, ${novoTexto}`;
        break;
      }
    }

    if (corpoEmail === '') {
      corpoEmail = `Olá, tudo, Meu Nome é ${nome}, ${mensagem}`;
    }

    const mailtoLink =
      `mailto:jose.leandro.nasciment@gmail.com?subject=${assunto}
    &body=${encodeURIComponent(corpoEmail)}`.replace(/\s/g, '');

    window.location.href = mailtoLink;
    notificacoesMensagem();
  };

  return (
    <section className="py-10 w-full flex flex-col justify-evenly items-center">
      <div className="w-full items-start">
        <h4
          className={`
          text-xl my-2 ml-4 md:text-[28px] md:ml-10 
           font-extralight
           text-custom-blue
           text-cente
           sm:text-[22px] ${domine.className}`}
        >
          Contato
        </h4>
      </div>

      <form
        className="items-center flex h-auto justify-evenly w-full"
        ref={refForm}
      >
        <div
          className="items-center flex flex-col h-5/6
         w-full sm:w-4/5 md:w-3/4 xl:w-1/2"
        >
          <div className="items-center flex flex-col mb-4 w-auto">
            <h6
              className={`
            bg-slate-900 rounded-xl 
            shadow-customShadow text-xl sm:text-2xl
            p-3 text-center w-auto
            left-auto absolute top-auto
            div__titulo
            ${domine.className}`}
            >
              {' '}
              Entre em contato{' '}
            </h6>
          </div>
          <div
            className="
          bg-transparent border-[1.5px] w-11/12
          border-solid border-slate-700
          rounded-xl h-auto mt-4 ml-2 py-5 px-10
          flex flex-col items-center"
          >
            <div className="flex flex-col h-auto my-3 w-11/12">
              <label
                htmlFor="assunto"
                className={`${domine.className}`}
              >
                Assunto
              </label>

              <input
                name="assunto"
                type="text"
                ref={refAssunto}
                data-tipo="assunto"
                pattern="^[a-zA-Z\s]+$"
                className="
                bg-transparent
                border-b-[1.5px]
               h-8 mb-2 ml-3 w-auto border-solid
               text-base
                focus:outline-none
               focus:px-0 py-1 focus:w-[102%] placeholder:text-slate-500
                "
                placeholder="Informe o assunto"
                required
                title="O motivo não deve ter números ou caracteres especiais"
                value={formData.assunto}
                onChange={(e) =>
                  setFormData({ ...formData, assunto: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col h-auto w-11/12 my-3">
              <label
                htmlFor="mensagem"
                className={`${domine.className}`}
              >
                Mensagem
              </label>
              <input
                name="mensagem"
                type="text"
                ref={refMensagem}
                data-tipo="mensagem"
                id="div_mensagem"
                pattern="^[a-zA-Z\s]+$"
                className="
                bg-transparent
                border-b-[1.5px]
               h-8 mb-2 ml-3 w-auto border-solid
               text-base
                focus:outline-none
               focus:px-0 py-1 focus:w-[102%] placeholder:text-slate-500
                "
                placeholder="Digite sua mensagem"
                required
                title="A mensagem não deve ter números ou caracteres especiais"
                value={formData.mensagem}
                onChange={(e) =>
                  setFormData({ ...formData, mensagem: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col h-auto my-3 w-11/12">
              <label
                htmlFor="nome"
                className={`${domine.className}`}
              >
                Nome
              </label>
              <input
                name="nome"
                type="text"
                ref={refNome}
                data-tipo="nome"
                pattern="^[a-zA-Z\s]+$"
                id="div__nome"
                className="
                bg-transparent
                border-b-[1.5px]
               h-8 mb-2 ml-3 w-auto border-solid
               text-base
                focus:outline-none
               focus:px-0 py-1 focus:w-[102%] placeholder:text-slate-500
                "
                placeholder="Digite seu nome"
                required
                title="O seu nome não deve ter números ou caracteres especiais"
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
              />
            </div>
            <a href="mailto:jose.leandro.nasciment@gmail.com">
              <button
                className="py-2 px-10 sm:px-16 border-none
                 bg-slate-800 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  if (isFormValid) {
                    alteracaoDadosMailto();
                  }
                }}
                type="submit"
              >
                Enviar
              </button>
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}
