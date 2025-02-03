export const typesOfErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
  ];

export const errorMessages = {
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