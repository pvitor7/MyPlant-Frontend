/* eslint-disable */
import React, { useState } from "react";
import Container from "./styled";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";

function Equipe(){

    const redirecionamento = useHistory()

    

    return(
        <>
        <Header/>
        <Container>
        <h1>teste</h1>
        </Container>
        </>
    )
}

export default Equipe