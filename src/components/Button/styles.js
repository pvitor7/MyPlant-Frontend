/* eslint-disable */
import styled from 'styled-components';

const Container = styled.button`
    background: ${(props) => (props.GreenSchema ? '#98B13A' : '#56B297')};
    color: var(--white);
    height: 55px;
    border-radius: 8px;
    border: none;
    font-family: 'inter';
    font-weight: bold;
    margin-top: 16px;
    width: 100%;
    transition: 0.5s;
     :hover {
        background: ${(props) => (props.GreenSchema ? '#B7D251' : '#75CEC3')};
     }
`;

export default Container;
