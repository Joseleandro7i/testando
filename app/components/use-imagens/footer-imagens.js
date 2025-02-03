import React from "react";

export default function FooterImagens() {

    return(
        <footer className="h-auto px-4 my-4 w-full flex flex-col items-center">
          <img
            className="mt-2 mb-3"
            src="/img/logo.png"
            alt="Foto do desenvolvedor do site josé leandro"
          />
          <p className="px-2 py-3">
            &copy; Construido e desenvolvido por José leandro do nascimento
          </p>
        </footer>
    )
}