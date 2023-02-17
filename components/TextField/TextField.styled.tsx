import styled from "styled-components";


export const TextFieldContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:10px;
`


export const TextFieldLabel = styled.label`
    width:100%;
    font-size:20px;
`

export const TextFieldInput = styled.input`
    border:4px solid #929789;
    background-color: transparent;
    width:100%;
    color:black;
    padding:5px 10px;
    font-size:20px;

    &:focus{
        outline: none;
    }
`