/* eslint-disable */

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0; 
    }

    :root {
        --green: #98B13A;
        --lightGreen: #B7D251;
        --blue: #56B297;
        --lightBlue: #75CEC3;
        --grey: #E6E6E8;
        --lightGrey: #F2F2F4;
        --white: #FFFFFF;

        --sucess: #98B13A;
        --negative: #E83F5B;
    }

    body {
        background: var(--white);
        color: var(--blue);
    }

    body, input, button {
        font-family: 'inter';
        font-size: 1rem;
    }

    h1, h2, h3, h4 {
        font-family: 'nunito';
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
