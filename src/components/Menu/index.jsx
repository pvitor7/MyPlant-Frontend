/* eslint-disable */
import React from "react";
import Container from "./styled";
import reactDom from "react-dom";
import { useHistory } from "react-router-dom";
import fechar from "../../imgs/fechar.png"

function Menu({sair}){

    const redirecionamento = useHistory()

    function teste(destino){
        redirecionamento.push(destino)
    }

    const portalRoot = document.getElementById("portal-root");

    return reactDom.createPortal(<Container>
        <div className="menu-animation">
        <header>
    <p>Busque, conheça, cuide!</p>
    </header>
    <main>
        <ul>
            <li onClick={() => teste("/Login")}><p>Plantas</p></li>
            <li onClick={() => teste("/Informações")}><p>Sobre o My Plant</p></li>
            <li onClick={() => teste("/Sobre")}><p>Equipe</p></li>
            <li onClick={() => teste("/Contrato")}><p>Termos de uso</p></li>
        </ul>

        <div>
            <img></img>
            <p>Acesse sua conta ou <button>Cadastre-se</button> </p>
        </div>
    
     <button className="buttonreturn" onClick={() => sair(false)}><img src={fechar}/></button>
     
    </main>
    </div>
    </Container>
    , portalRoot)

    
}

export default Menu