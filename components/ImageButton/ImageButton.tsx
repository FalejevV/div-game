import { ImageButtonContainer, ImageButtonOFF, ImageButtonON } from "./ImageButton.styled";



function ImageButton(props:{
    title:string,
    alt:string,
    offImage:string,
    onImage:string,
    function:Function,
    istoggled:boolean,
}){

    return(
        <ImageButtonContainer istoggled={props.istoggled ? 1 : undefined } onClick={() => props.function()}>
            <ImageButtonOFF  alt={props.alt} src={props.offImage} />
            <ImageButtonON  alt={props.alt} src={props.onImage} />
        </ImageButtonContainer>
    )
}


export default ImageButton;