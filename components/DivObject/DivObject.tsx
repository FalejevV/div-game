import { Wrapper } from "@/styles/Styles.stytled";
import { DivObjectBoardContainer, DivObjectItself } from "./DivObject.styled";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { setPosition } from "app/slices/divData";
import { useState } from "react";


function DivObject(){
    let divData = useAppSelector((state:RootState) => state.divData);
    return(
        <DivObjectBoardContainer>
            <DivObjectItself left={divData.left} top={divData.top}/>
        </DivObjectBoardContainer>  

    )
}

export default DivObject;