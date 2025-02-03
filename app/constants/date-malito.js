export const wordsOfGreetings = [
    'Olá, bom dia',
    'Boa noite',
    'Bom dia',
    'Olá',
    'Olá, tudo bem',
    'Tudo bem',
    'Boa tarde',
  ];

  export const fields = [
    {
      name: "assunto",
      label: "Assunto",
      placeholder: "Informe o assunto",
      pattern: "^[a-zA-Z\\s]+$",
      title: "O motivo não deve ter números ou caracteres especiais",
      required: true,
    },
    {
      name: "mensagem",
      label: "Mensagem",
      placeholder: "Digite sua mensagem",
      pattern: "^[a-zA-Z\\s]+$",
      title: "A mensagem não deve ter números ou caracteres especiais",
      required: true,
    },
    {
      name: "nome",
      label: "Nome",
      placeholder: "Digite seu nome",
      pattern: "^[a-zA-Z\\s]+$",
      title: "O seu nome não deve ter números ou caracteres especiais",
      required: true,
    },
  ];