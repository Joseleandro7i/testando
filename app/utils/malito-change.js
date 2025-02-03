import { wordsOfGreetings } from "../constants/date-malito";
import { notificationMessage } from "./notification-message";

/**
 * Atualiza o link mailto com a entrada do usuário.
 */
export const malitoChange = (FormData) => {
  const { mensagem, nome, assunto } = FormData;

  // Find the first greeting in the message
  const greeting = wordsOfGreetings.find((word) => mensagem.includes(word));
  const corpoEmail = greeting
    ? `${greeting}, Meu Nome é ${nome}, ${mensagem.replace(greeting, "").trim()}`
    : `Olá, tudo, Meu Nome é ${nome}, ${mensagem}`;

  // Generate the mailto link
  const mailtoLink = `mailto:jose.leandro.nasciment@gmail.com?subject=${assunto}&body=${encodeURIComponent(corpoEmail)}`.replace(/\s/g, "");

  // Redirect and show notification
  window.location.href = mailtoLink;
  notificationMessage();
};
