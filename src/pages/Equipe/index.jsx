/* eslint-disable */
import React, { useState } from "react";
import Container from "./styled";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Rick from "../../imgs/Henrique.jpg"
import PauloV from "../../imgs/PauloVitor.jpg"
import Bruna from "../../imgs/Bruna.jpeg"

function Equipe(){

    const redirecionamento = useHistory()

    const dadosDevs = [{
        foto: PauloV,
        nome:'Paulo Vitor',
        cargo:'Scrum Master'
    },{
        foto: "none",
        nome: "Paulo David",
        cargo: "Tech Leader"
    },{
        foto: Bruna,
        nome: "Bruna Varela",
        cargo: "Product Owner"
    },{
        foto: "none",
        nome: "Gabriel Benjamin",
        cargo: "QA"
    },{
        foto: Rick,
        nome: "Henrique F. Mendes",
        cargo: "QA"
    }
];
    

    const devs = dadosDevs.map((item) => {
        return (
            <>
            <li className="informacoes-devs" key={item.nome}>
            <img src={item.foto}></img>
            <h1>{item.nome}</h1>
            <p>{item.cargo}</p>
            </li>
            </>
        )
    })


    return(
        <>
        <Header/>        
        <Container>
        <h2>Membros do grupo</h2>
        <ul>    
        {devs}
        </ul>
        </Container>
        </>
    )
}

export default Equipe