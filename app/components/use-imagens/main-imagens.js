import React from "react";
import { descriptionUseOfImagens } from "../../constants/date-use-imagens";
import { iconsData } from "../../data/icon-data";

export default function MainImagens() {
    return (
        <main>
            <div className="w-full h-24 flex flex-col justify-evenly items-center">
                <h1 className="text-xl my-3">
                    Imagens e Ícones Utilizados em meu Portfólio
                </h1>
                <p className="mt-2 mb-2 w-[90%]">
                    {descriptionUseOfImagens}
                </p>
            </div>

            <div className="flex mt-5 mb-2 flex-wrap justify-evenly">
                {iconsData.map((icon, index) => (
                    <div className="w-[25%] text-center flex flex-col justify-evenly items-center mb-2 mt-3" key={index} >
                        <img src={icon.imgSrc} className="px-2 my-2" alt={icon.name} />

                        <div className="w-full flex flex-col text-center">
                            <a href={icon.link} target="_blank" rel="noopener noreferrer" className="w-auto"> {icon.name} </a>
                            <span className="w-auto"> icon by </span>
                            <a href="https://icons8.com" className="w-auto text-blue-700" target="_blank" rel="noopener noreferrer" >
                                Icons8
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}