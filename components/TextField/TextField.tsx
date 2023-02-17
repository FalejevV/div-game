
import { RefAttributes } from "react";
import { TextFieldContainer, TextFieldInput, TextFieldLabel } from "./TextField.styled";




function TextField(props:{
    title:string,
    name:string,
    placeholder?:string,
    reff?:any
}){
    return(
        <TextFieldContainer>
            <TextFieldLabel htmlFor={props.name}>{props.title}</TextFieldLabel>
            <TextFieldInput ref={props.reff} id={props.name} name={props.name} placeholder={props.placeholder || ""}/>
        </TextFieldContainer>
    )
}

export default TextField;
