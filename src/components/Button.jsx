import styled from "styled-components";

const Button = styled.button`
    background: #ccc;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: .5rem;

    &:hover {
        background: #c0c0c0; 
        border-color: black;
    }

    &.added {
        background: green;
        color: #fff;
        border: 2px solid green;
        transition: color 0.3s ease-in-out;
    }
`

export default Button;
