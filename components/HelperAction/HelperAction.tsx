import { HelperActionContainer, HelperActionImage } from "./HelperAction.styled";



function HelperAction(props:{
    image:string
}){
    return(
        <HelperActionContainer>
            <HelperActionImage src={props.image} />
        </HelperActionContainer>
    )
}

export default HelperAction;