/* eslint-disable */
import React, { useState } from "react";
import Container from "./styled";
import logo from "../../imgs/logo.png"
import icon from "../../imgs/menuzinho.png"
import Menu from "../Menu/index"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BiArrowToRight } from 'react-icons/bi';

function Header(){

    const redirecionamento = useHistory()
    const [menuOpen, setMenuOpen] = useState(false)

    function home(){
        redirecionamento.push("/")
    }
    function pages(destino){
        redirecionamento.push(destino)
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
        <Menu abrir = {menuOpen} sair = {setMenuOpen} />
         <img src={logo} onClick={home}/>
         <div className="button-login">
         
          <button onClick={() => pages("/login")}><BiArrowToRight/>Entrar</button>
          </div>
        </header>
        </Container>
    )
}

export default Header
