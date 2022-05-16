/* eslint-disable */
import React, { useState } from "react";
import Container from "./styled";
import logo from "../../imgs/logo.png"
import icon from "../../imgs/menuzinho.png"
import seta from "../../imgs/setinha.png"
import Menu from "../Menu/index"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header(){

    const redirecionamento = useHistory()
    const [menuOpen, setMenuOpen] = useState(false)

    function home(){
        redirecionamento.push("/")
    }

    function menuAtivo(){

        setMenuOpen(true)
        
    }

    return(
        <Container>
            <header>
        <div onClick={menuAtivo} className="icon-menu">
            <img src = {icon} ></img>
        <p>Menu</p>
        </div>
        {menuOpen === true ?(
        <Menu sair = {setMenuOpen} />

        ): null }

         <img src={logo} onClick={home}/>
         <div className="button-login">
         <img src = {seta} ></img>
          <button>Entrar</button>
          </div>
        </header>
        </Container>
    )
}

export default Header