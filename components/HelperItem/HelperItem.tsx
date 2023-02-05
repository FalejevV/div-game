import { IHelper } from "interface";
import { HelperItemContainer, HelperItemIcon } from "./HelperItem.styled";



function HelperItem(props:{
    helper:IHelper
}){
    return(
        <HelperItemContainer>
            <HelperItemIcon src={props.helper.imageSrc} alt={props.helper.imageAlt}/>
        </HelperItemContainer>
    )
}


export default HelperItem;