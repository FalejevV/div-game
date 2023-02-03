import { useState } from "react";
import { ImageButtonContainer, ImageButtonOFF, ImageButtonON } from "./ImageButton.styled";



function ImageButton(props:{
    width?:number,
    height?:number,
    title:string,
    alt:string,
    offImage:string,
    onImage:string,
    function:Function,
    toggle:boolean,
}){

    return(
        <ImageButtonContainer toggle={props.toggle} onClick={() => props.function()}>
            <ImageButtonOFF width={props.width || "70"} height={props.height || "70"} alt={props.alt} src={props.offImage} />
            <ImageButtonON width={props.width || "70"} height={props.height || "70"} alt={props.alt} src={props.onImage} />
        </ImageButtonContainer>
    )
}


export default ImageButton;